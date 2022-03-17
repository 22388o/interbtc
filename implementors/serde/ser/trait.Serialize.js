(function() {var implementors = {};
implementors["bitcoin"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"bitcoin/enum.Address.html\" title=\"enum bitcoin::Address\">Address</a>","synthetic":false,"types":["bitcoin::address::Address"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"bitcoin/struct.PublicKey.html\" title=\"struct bitcoin::PublicKey\">PublicKey</a>","synthetic":false,"types":["bitcoin::address::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"bitcoin/types/struct.H256Le.html\" title=\"struct bitcoin::types::H256Le\">H256Le</a>","synthetic":false,"types":["bitcoin::types::H256Le"]}];
implementors["btc_relay"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"btc_relay/pallet/trait.Config.html\" title=\"trait btc_relay::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"btc_relay/pallet/struct.GenesisConfig.html\" title=\"struct btc_relay::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["btc_relay::pallet::GenesisConfig"]}];
implementors["democracy"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"democracy/enum.VoteThreshold.html\" title=\"enum democracy::VoteThreshold\">VoteThreshold</a>","synthetic":false,"types":["democracy::vote_threshold::VoteThreshold"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"democracy/pallet/trait.Config.html\" title=\"trait democracy::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"democracy/pallet/struct.GenesisConfig.html\" title=\"struct democracy::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["democracy::pallet::GenesisConfig"]}];
implementors["fee"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"fee/pallet/trait.Config.html\" title=\"trait fee::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"fee/pallet/struct.GenesisConfig.html\" title=\"struct fee::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["fee::pallet::GenesisConfig"]}];
implementors["interbtc_parachain"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_parachain/chain_spec/struct.Extensions.html\" title=\"struct interbtc_parachain::chain_spec::Extensions\">Extensions</a>","synthetic":false,"types":["interbtc_parachain::chain_spec::Extensions"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_parachain/chain_spec/struct.ExtensionsFork.html\" title=\"struct interbtc_parachain::chain_spec::ExtensionsFork\">ExtensionsFork</a>","synthetic":false,"types":["interbtc_parachain::chain_spec::ExtensionsFork"]}];
implementors["interbtc_primitives"] = [{"text":"impl&lt;CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_primitives/struct.VaultCurrencyPair.html\" title=\"struct interbtc_primitives::VaultCurrencyPair\">VaultCurrencyPair</a>&lt;CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["interbtc_primitives::VaultCurrencyPair"]},{"text":"impl&lt;AccountId, CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_primitives/struct.VaultId.html\" title=\"struct interbtc_primitives::VaultId\">VaultId</a>&lt;AccountId, CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["interbtc_primitives::VaultId"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"interbtc_primitives/issue/enum.IssueRequestStatus.html\" title=\"enum interbtc_primitives::issue::IssueRequestStatus\">IssueRequestStatus</a>","synthetic":false,"types":["interbtc_primitives::issue::IssueRequestStatus"]},{"text":"impl&lt;AccountId, BlockNumber, Balance, CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_primitives/issue/struct.IssueRequest.html\" title=\"struct interbtc_primitives::issue::IssueRequest\">IssueRequest</a>&lt;AccountId, BlockNumber, Balance, CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["interbtc_primitives::issue::IssueRequest"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"interbtc_primitives/redeem/enum.RedeemRequestStatus.html\" title=\"enum interbtc_primitives::redeem::RedeemRequestStatus\">RedeemRequestStatus</a>","synthetic":false,"types":["interbtc_primitives::redeem::RedeemRequestStatus"]},{"text":"impl&lt;AccountId, BlockNumber, Balance, CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_primitives/redeem/struct.RedeemRequest.html\" title=\"struct interbtc_primitives::redeem::RedeemRequest\">RedeemRequest</a>&lt;AccountId, BlockNumber, Balance, CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["interbtc_primitives::redeem::RedeemRequest"]},{"text":"impl&lt;AccountId, Balance, CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_primitives/refund/struct.RefundRequest.html\" title=\"struct interbtc_primitives::refund::RefundRequest\">RefundRequest</a>&lt;AccountId, Balance, CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["interbtc_primitives::refund::RefundRequest"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"interbtc_primitives/replace/enum.ReplaceRequestStatus.html\" title=\"enum interbtc_primitives::replace::ReplaceRequestStatus\">ReplaceRequestStatus</a>","synthetic":false,"types":["interbtc_primitives::replace::ReplaceRequestStatus"]},{"text":"impl&lt;AccountId, BlockNumber, Balance, CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_primitives/replace/struct.ReplaceRequest.html\" title=\"struct interbtc_primitives::replace::ReplaceRequest\">ReplaceRequest</a>&lt;AccountId, BlockNumber, Balance, CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["interbtc_primitives::replace::ReplaceRequest"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"interbtc_primitives/enum.TokenSymbol.html\" title=\"enum interbtc_primitives::TokenSymbol\">TokenSymbol</a>","synthetic":false,"types":["interbtc_primitives::TokenSymbol"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"interbtc_primitives/enum.CurrencyId.html\" title=\"enum interbtc_primitives::CurrencyId\">CurrencyId</a>","synthetic":false,"types":["interbtc_primitives::CurrencyId"]}];
implementors["interbtc_runtime_standalone"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_runtime_standalone/struct.SessionKeys.html\" title=\"struct interbtc_runtime_standalone::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["interbtc_runtime_standalone::SessionKeys"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interbtc_runtime_standalone/struct.GenesisConfig.html\" title=\"struct interbtc_runtime_standalone::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["interbtc_runtime_standalone::GenesisConfig"]}];
implementors["interlay_runtime_parachain"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interlay_runtime_parachain/struct.SessionKeys.html\" title=\"struct interlay_runtime_parachain::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["interlay_runtime_parachain::SessionKeys"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"interlay_runtime_parachain/struct.GenesisConfig.html\" title=\"struct interlay_runtime_parachain::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["interlay_runtime_parachain::GenesisConfig"]}];
implementors["issue"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"issue/pallet/trait.Config.html\" title=\"trait issue::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"issue/pallet/struct.GenesisConfig.html\" title=\"struct issue::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["issue::pallet::GenesisConfig"]}];
implementors["kintsugi_runtime_parachain"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kintsugi_runtime_parachain/struct.SessionKeys.html\" title=\"struct kintsugi_runtime_parachain::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["kintsugi_runtime_parachain::SessionKeys"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kintsugi_runtime_parachain/struct.GenesisConfig.html\" title=\"struct kintsugi_runtime_parachain::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["kintsugi_runtime_parachain::GenesisConfig"]}];
implementors["module_oracle_rpc_runtime_api"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"module_oracle_rpc_runtime_api/struct.BalanceWrapper.html\" title=\"struct module_oracle_rpc_runtime_api::BalanceWrapper\">BalanceWrapper</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["module_oracle_rpc_runtime_api::BalanceWrapper"]}];
implementors["nomination"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"nomination/pallet/struct.GenesisConfig.html\" title=\"struct nomination::pallet::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["nomination::pallet::GenesisConfig"]}];
implementors["oracle"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"oracle/pallet/trait.Config.html\" title=\"trait oracle::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"oracle/pallet/struct.GenesisConfig.html\" title=\"struct oracle::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["oracle::pallet::GenesisConfig"]}];
implementors["redeem"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"redeem/pallet/trait.Config.html\" title=\"trait redeem::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"redeem/pallet/struct.GenesisConfig.html\" title=\"struct redeem::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["redeem::pallet::GenesisConfig"]}];
implementors["refund"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"refund/pallet/trait.Config.html\" title=\"trait refund::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"refund/pallet/struct.GenesisConfig.html\" title=\"struct refund::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["refund::pallet::GenesisConfig"]}];
implementors["replace"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"replace/pallet/trait.Config.html\" title=\"trait replace::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"replace/pallet/struct.GenesisConfig.html\" title=\"struct replace::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["replace::pallet::GenesisConfig"]}];
implementors["security"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"security/enum.StatusCode.html\" title=\"enum security::StatusCode\">StatusCode</a>","synthetic":false,"types":["security::types::StatusCode"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"security/pallet/struct.GenesisConfig.html\" title=\"struct security::pallet::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["security::pallet::GenesisConfig"]}];
implementors["supply"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"supply/pallet/trait.Config.html\" title=\"trait supply::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"supply/pallet/struct.GenesisConfig.html\" title=\"struct supply::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["supply::pallet::GenesisConfig"]}];
implementors["testnet_runtime_parachain"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"testnet_runtime_parachain/struct.SessionKeys.html\" title=\"struct testnet_runtime_parachain::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["testnet_runtime_parachain::SessionKeys"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"testnet_runtime_parachain/struct.GenesisConfig.html\" title=\"struct testnet_runtime_parachain::GenesisConfig\">GenesisConfig</a>","synthetic":false,"types":["testnet_runtime_parachain::GenesisConfig"]}];
implementors["vault_registry"] = [{"text":"impl&lt;Balance, CurrencyId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vault_registry/struct.SystemVault.html\" title=\"struct vault_registry::SystemVault\">SystemVault</a>&lt;Balance, CurrencyId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CurrencyId: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["vault_registry::types::SystemVault"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"vault_registry/pallet/trait.Config.html\" title=\"trait vault_registry::pallet::Config\">Config</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vault_registry/pallet/struct.GenesisConfig.html\" title=\"struct vault_registry::pallet::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":false,"types":["vault_registry::pallet::GenesisConfig"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()