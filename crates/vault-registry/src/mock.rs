use crate as vault_registry;
use crate::{ext, Config, Error};
use frame_support::{
    parameter_types,
    traits::{GenesisBuild, StorageMapShim},
};
use mocktopus::mocking::{clear_mocks, MockResult, Mockable};
use sp_arithmetic::{FixedPointNumber, FixedU128};
use sp_core::H256;
use sp_runtime::{
    testing::Header,
    traits::{BlakeTwo256, IdentityLookup},
    ModuleId,
};

type UncheckedExtrinsic = frame_system::mocking::MockUncheckedExtrinsic<Test>;
type Block = frame_system::mocking::MockBlock<Test>;

// Configure a mock runtime to test the pallet.
frame_support::construct_runtime!(
    pub enum Test where
        Block = Block,
        NodeBlock = Block,
        UncheckedExtrinsic = UncheckedExtrinsic,
    {
        System: frame_system::{Pallet, Call, Storage, Config, Event<T>},
        Timestamp: pallet_timestamp::{Pallet, Call, Storage, Inherent},

        // Tokens & Balances
        Backing: pallet_balances::<Instance1>::{Pallet, Call, Storage, Config<T>, Event<T>},
        Issuing: pallet_balances::<Instance2>::{Pallet, Call, Storage, Config<T>, Event<T>},

        Collateral: currency::<Instance1>::{Pallet, Call, Storage, Event<T>},
        Treasury: currency::<Instance2>::{Pallet, Call, Storage, Event<T>},

        // Operational
        Security: security::{Pallet, Call, Storage, Event<T>},
        VaultRegistry: vault_registry::{Pallet, Call, Config<T>, Storage, Event<T>},
        ExchangeRateOracle: exchange_rate_oracle::{Pallet, Call, Config<T>, Storage, Event<T>},
    }
);

pub type AccountId = u64;
pub type Balance = u128;
pub type BlockNumber = u64;

parameter_types! {
    pub const BlockHashCount: u64 = 250;
    pub const SS58Prefix: u8 = 42;
}

impl frame_system::Config for Test {
    type BaseCallFilter = ();
    type BlockWeights = ();
    type BlockLength = ();
    type DbWeight = ();
    type Origin = Origin;
    type Call = Call;
    type Index = u64;
    type BlockNumber = BlockNumber;
    type Hash = H256;
    type Hashing = BlakeTwo256;
    type AccountId = AccountId;
    type Lookup = IdentityLookup<Self::AccountId>;
    type Header = Header;
    type Event = TestEvent;
    type BlockHashCount = BlockHashCount;
    type Version = ();
    type PalletInfo = PalletInfo;
    type AccountData = ();
    type OnNewAccount = ();
    type OnKilledAccount = ();
    type SystemWeightInfo = ();
    type SS58Prefix = SS58Prefix;
    type OnSetCode = ();
}

parameter_types! {
    pub const ExistentialDeposit: u64 = 1;
    pub const MaxLocks: u32 = 50;
}

/// Backing currency - e.g. DOT/KSM
impl pallet_balances::Config<pallet_balances::Instance1> for Test {
    type MaxLocks = MaxLocks;
    type Balance = Balance;
    type Event = TestEvent;
    type DustRemoval = ();
    type ExistentialDeposit = ExistentialDeposit;
    type AccountStore = StorageMapShim<
        pallet_balances::Account<Test, pallet_balances::Instance1>,
        frame_system::Provider<Test>,
        AccountId,
        pallet_balances::AccountData<Balance>,
    >;
    type WeightInfo = ();
}

/// Issuing currency - e.g. PolkaBTC
impl pallet_balances::Config<pallet_balances::Instance2> for Test {
    type MaxLocks = MaxLocks;
    type Balance = Balance;
    type Event = TestEvent;
    type DustRemoval = ();
    type ExistentialDeposit = ExistentialDeposit;
    type AccountStore = StorageMapShim<
        pallet_balances::Account<Test, pallet_balances::Instance2>,
        frame_system::Provider<Test>,
        AccountId,
        pallet_balances::AccountData<Balance>,
    >;
    type WeightInfo = ();
}

parameter_types! {
    pub const BackingName: &'static [u8] = b"Polkadot";
    pub const BackingSymbol: &'static [u8] = b"DOT";
    pub const BackingDecimals: u8 = 10;
}

impl currency::Config<currency::Collateral> for Test {
    type Event = TestEvent;
    type Currency = pallet_balances::Pallet<Test, pallet_balances::Instance1>;
    type Name = BackingName;
    type Symbol = BackingSymbol;
    type Decimals = BackingDecimals;
}

parameter_types! {
    pub const IssuingName: &'static [u8] = b"Bitcoin";
    pub const IssuingSymbol: &'static [u8] = b"BTC";
    pub const IssuingDecimals: u8 = 8;
}

impl currency::Config<currency::Treasury> for Test {
    type Event = TestEvent;
    type Currency = pallet_balances::Pallet<Test, pallet_balances::Instance2>;
    type Name = IssuingName;
    type Symbol = IssuingSymbol;
    type Decimals = IssuingDecimals;
}

parameter_types! {
    pub const MinimumPeriod: u64 = 5;
}

impl pallet_timestamp::Config for Test {
    type Moment = u64;
    type OnTimestampSet = ();
    type MinimumPeriod = MinimumPeriod;
    type WeightInfo = ();
}

impl exchange_rate_oracle::Config for Test {
    type Event = TestEvent;
    type UnsignedFixedPoint = FixedU128;
    type WeightInfo = ();
}

parameter_types! {
    pub const VaultModuleId: ModuleId = ModuleId(*b"mod/vreg");
}

impl Config for Test {
    type ModuleId = VaultModuleId;
    type Event = TestEvent;
    type RandomnessSource = pallet_randomness_collective_flip::Pallet<Test>;
    type UnsignedFixedPoint = FixedU128;
    type WeightInfo = ();
}

impl security::Config for Test {
    type Event = TestEvent;
}

pub type TestEvent = Event;
pub type TestError = Error<Test>;
pub type SecurityError = security::Error<Test>;
pub type CollateralError = currency::Error<Test, currency::Instance1>;
pub type LiquidationTarget = vault_registry::LiquidationTarget;

pub struct ExtBuilder;

pub const DEFAULT_ID: u64 = 3;
pub const OTHER_ID: u64 = 4;
pub const RICH_ID: u64 = 5;
pub const DEFAULT_COLLATERAL: u128 = 100;
pub const RICH_COLLATERAL: u128 = DEFAULT_COLLATERAL + 50;
pub const MULTI_VAULT_TEST_IDS: [u64; 4] = [100, 101, 102, 103];
pub const MULTI_VAULT_TEST_COLLATERAL: u128 = 100000;

impl ExtBuilder {
    pub fn build_with(
        conf: pallet_balances::GenesisConfig<Test, pallet_balances::Instance1>,
    ) -> sp_io::TestExternalities {
        let mut storage = frame_system::GenesisConfig::default().build_storage::<Test>().unwrap();

        conf.assimilate_storage(&mut storage).unwrap();

        pallet_balances::GenesisConfig::<Test, pallet_balances::Instance2> { balances: vec![] }
            .assimilate_storage(&mut storage)
            .unwrap();

        // Parameters to be set in tests
        vault_registry::GenesisConfig::<Test> {
            minimum_collateral_vault: 0,
            punishment_delay: 0,
            secure_collateral_threshold: FixedU128::one(),
            auction_collateral_threshold: FixedU128::one(),
            premium_redeem_threshold: FixedU128::one(),
            liquidation_collateral_threshold: FixedU128::one(),
        }
        .assimilate_storage(&mut storage)
        .unwrap();

        sp_io::TestExternalities::from(storage)
    }
    pub fn build() -> sp_io::TestExternalities {
        ExtBuilder::build_with(pallet_balances::GenesisConfig::<Test, pallet_balances::Instance1> {
            balances: vec![
                (DEFAULT_ID, DEFAULT_COLLATERAL),
                (OTHER_ID, DEFAULT_COLLATERAL),
                (RICH_ID, RICH_COLLATERAL),
                (MULTI_VAULT_TEST_IDS[0], MULTI_VAULT_TEST_COLLATERAL),
                (MULTI_VAULT_TEST_IDS[1], MULTI_VAULT_TEST_COLLATERAL),
                (MULTI_VAULT_TEST_IDS[2], MULTI_VAULT_TEST_COLLATERAL),
                (MULTI_VAULT_TEST_IDS[3], MULTI_VAULT_TEST_COLLATERAL),
            ],
        })
    }
}

fn set_default_thresholds() {
    let secure = FixedU128::checked_from_rational(200, 100).unwrap(); // 200%
    let auction = FixedU128::checked_from_rational(150, 100).unwrap(); // 150%
    let premium = FixedU128::checked_from_rational(120, 100).unwrap(); // 120%
    let liquidation = FixedU128::checked_from_rational(110, 100).unwrap(); // 110%

    VaultRegistry::set_secure_collateral_threshold(secure);
    VaultRegistry::set_auction_collateral_threshold(auction);
    VaultRegistry::set_premium_redeem_threshold(premium);
    VaultRegistry::set_liquidation_collateral_threshold(liquidation);
}

pub fn run_test<T>(test: T)
where
    T: FnOnce(),
{
    clear_mocks();
    ext::oracle::backing_to_issuing::<Test>.mock_safe(|v| MockResult::Return(Ok(v)));
    ext::oracle::issuing_to_backing::<Test>.mock_safe(|v| MockResult::Return(Ok(v)));
    ExtBuilder::build().execute_with(|| {
        System::set_block_number(1);
        Security::set_active_block_number(1);
        set_default_thresholds();
        test()
    })
}
