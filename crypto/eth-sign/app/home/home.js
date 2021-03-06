(function () {

    'use strict';

// console.log("home.js");

    var controller = angular.module("app.home", []);

// https://docs.angularjs.org/api/ng/provider/$logProvider
    controller.config(function ($logProvider) {
        // $logProvider.debugEnabled(false);
        $logProvider.debugEnabled(true);
    });

    controller.controller("app.home", [
        '$scope',
        '$rootScope',
        '$log',
        '$state',
        function homeCtrl($scope,
                          $rootScope,
                          $log,
                          $state) {

            $log.debug("homeCtrl started");

            // activate tabs:
            $('.menu .item').tab();

            (function setContractVariables() {
                $scope.cryptonomicaVerificationContractAddress = {};
                $scope.cryptonomicaVerificationContractAddress[1] = "0x846942953c3b2A898F10DF1e32763A823bf6b27f";
                $scope.cryptonomicaVerificationContractAddressABI = [{
                    "constant": false,
                    "inputs": [{"name": "_withdrawalAddress", "type": "address"}],
                    "name": "fixWithdrawalAddress",
                    "outputs": [{"name": "", "type": "bool"}],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [],
                    "name": "priceForVerificationInWei",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "unverifiedFingerprint",
                    "outputs": [{"name": "", "type": "string"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "_withdrawalAddress", "type": "address"}],
                    "name": "setWithdrawalAddress",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "signedString",
                    "outputs": [{"name": "", "type": "string"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "_acc", "type": "address"}],
                    "name": "addManager",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "verificationAddedOn",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "signedStringUploadedOnUnixTime",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "birthDate",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "_newOwner", "type": "address"}],
                    "name": "changeOwnerStart",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "keyCertificateValidUntil",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "fingerprint",
                    "outputs": [{"name": "", "type": "bytes20"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "lastName",
                    "outputs": [{"name": "", "type": "bytes32"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "_acc", "type": "address"}, {
                        "name": "_fingerprint",
                        "type": "string"
                    }, {"name": "_fingerprintBytes20", "type": "bytes20"}, {
                        "name": "_keyCertificateValidUntil",
                        "type": "uint256"
                    }, {"name": "_firstName", "type": "string"}, {"name": "_lastName", "type": "string"}, {
                        "name": "_birthDate",
                        "type": "uint256"
                    }, {"name": "_nationality", "type": "string"}],
                    "name": "addVerificationData",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [],
                    "name": "withdrawalAddressFixed",
                    "outputs": [{"name": "", "type": "bool"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "revokedOn",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [{"name": "", "type": "address"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "_bytes32", "type": "bytes32"}],
                    "name": "bytes32ToString",
                    "outputs": [{"name": "", "type": "string"}],
                    "payable": false,
                    "stateMutability": "pure",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "verification",
                    "outputs": [{"name": "fingerprint", "type": "string"}, {
                        "name": "keyCertificateValidUntil",
                        "type": "uint256"
                    }, {"name": "firstName", "type": "string"}, {"name": "lastName", "type": "string"}, {
                        "name": "birthDate",
                        "type": "uint256"
                    }, {"name": "nationality", "type": "string"}, {
                        "name": "verificationAddedOn",
                        "type": "uint256"
                    }, {"name": "revokedOn", "type": "uint256"}, {"name": "signedString", "type": "string"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [],
                    "name": "changeOwnerAccept",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "firstName",
                    "outputs": [{"name": "", "type": "bytes32"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "manager", "type": "address"}],
                    "name": "removeManager",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [],
                    "name": "withdrawAllToWithdrawalAddress",
                    "outputs": [{"name": "", "type": "bool"}],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [],
                    "name": "stringToSignExample",
                    "outputs": [{"name": "", "type": "string"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "source", "type": "string"}],
                    "name": "stringToBytes32",
                    "outputs": [{"name": "result", "type": "bytes32"}],
                    "payable": false,
                    "stateMutability": "pure",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "_fingerprint", "type": "string"}, {
                        "name": "_fingerprintBytes20",
                        "type": "bytes20"
                    }, {"name": "_signedString", "type": "string"}],
                    "name": "uploadSignedString",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "bytes20"}],
                    "name": "addressAttached",
                    "outputs": [{"name": "", "type": "address"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "_acc", "type": "address"}],
                    "name": "revokeVerification",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "nationality",
                    "outputs": [{"name": "", "type": "bytes32"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [],
                    "name": "withdrawalAddress",
                    "outputs": [{"name": "", "type": "address"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": true,
                    "inputs": [{"name": "", "type": "address"}],
                    "name": "isManager",
                    "outputs": [{"name": "", "type": "bool"}],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                }, {
                    "constant": false,
                    "inputs": [{"name": "priceInWei", "type": "uint256"}],
                    "name": "setPriceForVerification",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }, {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "fromAccount", "type": "address"}, {
                        "indexed": false,
                        "name": "fingerprint",
                        "type": "string"
                    }, {"indexed": false, "name": "uploadedString", "type": "string"}],
                    "name": "SignedStringUploaded",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": false, "name": "forFingerprint", "type": "string"}, {
                        "indexed": true,
                        "name": "verifiedAccount",
                        "type": "address"
                    }, {"indexed": false, "name": "verificationAddedByAccount", "type": "address"}],
                    "name": "VerificationAdded",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "revocedforAccount", "type": "address"}, {
                        "indexed": false,
                        "name": "withFingerprint",
                        "type": "string"
                    }, {"indexed": false, "name": "revokedOnUnixTime", "type": "uint256"}, {
                        "indexed": true,
                        "name": "revokedBy",
                        "type": "address"
                    }],
                    "name": "VerificationRevoked",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "startedBy", "type": "address"}, {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }],
                    "name": "ChangeOwnerStarted",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    }],
                    "name": "OwnerChanged",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "added", "type": "address"}, {
                        "indexed": true,
                        "name": "addedBy",
                        "type": "address"
                    }],
                    "name": "ManagerAdded",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "removed", "type": "address"}, {
                        "indexed": true,
                        "name": "removedBy",
                        "type": "address"
                    }],
                    "name": "ManagerRemoved",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": false, "name": "from", "type": "uint256"}, {
                        "indexed": false,
                        "name": "to",
                        "type": "uint256"
                    }, {"indexed": true, "name": "changedBy", "type": "address"}],
                    "name": "PriceChanged",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "to", "type": "address"}, {
                        "indexed": false,
                        "name": "sumInWei",
                        "type": "uint256"
                    }, {"indexed": true, "name": "by", "type": "address"}, {
                        "indexed": false,
                        "name": "success",
                        "type": "bool"
                    }],
                    "name": "Withdrawal",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    }, {"indexed": true, "name": "changedBy", "type": "address"}],
                    "name": "WithdrawalAddressChanged",
                    "type": "event"
                }, {
                    "anonymous": false,
                    "inputs": [{"indexed": false, "name": "withdrawalAddressFixedAs", "type": "address"}, {
                        "indexed": false,
                        "name": "fixedBy",
                        "type": "address"
                    }],
                    "name": "WithdrawalAddressFixed",
                    "type": "event"
                }];
            })();

            /* --- Alerts */

            (function alerts() {
                $scope.alertDanger = null;  // red
                $scope.alertWarning = null; // yellow
                $scope.alertInfo = null;    // blue
                $scope.alertSuccess = null; // green
                $scope.alertMessage = null; // grey

                $scope.setAlertDanger = function (message) {
                    $scope.alertDanger = message;
                    $log.debug("$scope.alertDanger:", $scope.alertDanger);
                    // $scope.$apply(); // < needed
                    $scope.goTo("alertDanger");
                };

                $scope.setAlertWarning = function (message) {
                    $scope.alertWarning = message;
                    $log.debug("$scope.alertWarning:", $scope.alertWarning);
                    // $scope.$apply(); //
                    $scope.goTo("alertWarning");
                };

                $scope.setAlertInfo = function (message) {
                    $scope.alertInfo = message;
                    $log.debug("$scope.alertInfo:", $scope.alertInfo);
                    // $scope.$apply();
                    $scope.goTo("alertInfo");
                };

                $scope.setAlertSuccess = function (message) {
                    $scope.alertSuccess = message;
                    $log.debug("$scope.alertSuccess:", $scope.alertSuccess);
                    // $scope.$apply();
                    $scope.goTo("alertSuccess");
                };

                $scope.setAlertMessage = function (message, header) {
                    $scope.alertMessage = {};
                    $scope.alertMessage.header = header;
                    $scope.alertMessage.message = message;
                    $log.debug("$scope.alertMessage:", $scope.alertMessage);
                    // $scope.$apply();
                    $scope.goTo("alertMessage");
                };

            })();

            $rootScope.noConnectionToNodeError = true;
            // https://github.com/MetaMask/metamask-extension/issues/5699#issuecomment-445480857
            if (window.ethereum) {

                // $log.debug("$window.ethereum :");
                // $log.debug($window.ethereum);
                $rootScope.web3 = new Web3(ethereum);

                if (typeof window.ethereum.selectedAddress === 'undefined') { // privacy mode on
                    (async function () {
                        try {
                            // Request account access if needed
                            // This method returns a Promise that resolves to an array of user accounts once access is approved for a given dapp.
                            await window.ethereum.enable();
                            // Accounts now exposed
                            // $rootScope.web3.eth.accounts[0] > does not work
                            // but you have already: web3.eth.defaultAccount
                            // $log.debug("$rootScope.web3.eth.defaultAccount : ");
                            // $log.debug($rootScope.web3.eth.defaultAccount);
                            $rootScope.noConnectionToNodeError = false;
                            main();

                        } catch (error) {
                            // if user denied account access:
                            // {"message":"User denied account authorization","code":4001}
                            $log.error(error);
                            // $scope.setAlertDanger(
                            //     "User denied MetaMask connect. Web application can not be started."
                            //     + "If you wish to use this webapp, please, reload the page and connect MetaMask"
                            // );
                            if (error.message && error.code === 4001) {
                                error = "User denied MetaMask connect. Web application can not be started."
                                    + " If you wish to use this webapp, please, reload the page and connect MetaMask";
                            }
                            $scope.setAlertDanger(error);
                            $scope.$apply(); // <<< needed here!
                        }

                    })();
                } else { // privacy mode of or already connected
                    $rootScope.noConnectionToNodeError = false;
                    main();
                }

            } else if (window.web3) {
                $rootScope.web3 = new Web3(web3.currentProvider);
                // Accounts always exposed

                if (!$rootScope.web3.eth.defaultAccount && $rootScope.web3.eth.accounts && $rootScope.web3.eth.accounts[0]) {
                    $rootScope.web3.eth.defaultAccount = rootScope.web3.eth.accounts[0];
                    $log.debug("$rootScope.web3.eth.defaultAccount : ");
                    $log.debug($rootScope.web3.eth.defaultAccount);
                }

                main();
            }
            // Non-dapp browsers:
            else {

                $log.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
                // $scope.setAlertDanger("This web application requires Ethereum connection. Please install MetaMask.io browser plugin");
                // > or use <no-connection-to-node-error></no-connection-to-node-error> directive
            }

            function main() {

                getNetworkInfo();

                $rootScope.web3.eth.net.getId()
                    .then(function (result) {

                        $rootScope.currentNetwork.network_id = result; //
                        if (result === 1 || result === 3 || result === 4 || result === 42) {
                            $rootScope.currentNetwork.networkName = $rootScope.networks[result].networkName;
                            $rootScope.currentNetwork.etherscanLinkPrefix = $rootScope.networks[result].etherscanLinkPrefix;
                            $rootScope.currentNetwork.etherscanApiLink = $rootScope.networks[result].etherscanApiLink;
                        } else {
                            $rootScope.currentNetwork.networkName = "unknown network";
                            $rootScope.currentNetwork.etherscanLinkPrefix = "blockchain_explorer";
                            $rootScope.currentNetwork.etherscanApiLink = "blockchainExplorerAPI";
                            $scope.setAlertWarning("Unknown Ethereum network. Network ID: " + result);
                        }

                        $log.debug("$rootScope.currentNetwork.networkName:", $rootScope.currentNetwork.networkName);
                        $rootScope.$apply(); // needed here

                        if ($rootScope.currentNetwork.network_id === 1) {
                            $scope.contract = new $rootScope.web3.eth.Contract(
                                $scope.cryptonomicaVerificationContractAddressABI,
                                $scope.cryptonomicaVerificationContractAddress[1]
                            );
                            $log.debug("$scope.contract:");
                            $log.debug($scope.contract);
                            $log.debug("contract address: ", $scope.contract._address);
                        } else {
                            $log.debug("Cryptonomica verification does not work on", $rootScope.currentNetwork.networkName);
                        }

                        return $rootScope.web3.eth.getAccounts()

                    }).then(function (accounts) {

                    if (!$rootScope.web3.eth.defaultAccount && accounts && accounts.length && accounts.length > 0) {
                        // https://web3js.readthedocs.io/en/1.0/web3-eth.html#id20
                        $rootScope.web3.eth.defaultAccount = accounts[0];
                        $log.debug("$rootScope.web3.eth.defaultAccount:", $rootScope.web3.eth.defaultAccount);
                    }
                    if (!$rootScope.web3.eth.defaultAccount) {
                        $scope.setAlertDanger("Ethereum account not recognized. If you use MetaMask please login to MetaMask and connect to this site");
                    }

                    setUpSignatureFunctions();

                })
                    .catch(function (error) {
                        $log.error("error:");
                        $log.error(error);
                    });

            } // end of main()

            function setUpSignatureFunctions() {

                // see:
                // https://ethereum.stackexchange.com/questions/12033/sign-message-with-metamask-and-verify-with-ethereumjs-utils
                $scope.messageToSign = "This is a text to sign. You can change it.";
                $scope.signedMessage = null;
                $scope.signature = null;
                $scope.$apply(); // < needed here

                $scope.signMessage = function () {

                    // clear previous values (not needed, it's fast)
                    // $scope.signedMessage = null;
                    // $scope.signature = null;
                    // $scope.signatoryAddress = null;

                    // https://web3js.readthedocs.io/en/1.0/web3-eth.html#sign
                    $rootScope.web3.eth.personal.sign(
                        // $rootScope.web3.utils.utf8ToHex($scope.messageToSign),
                        $scope.messageToSign,
                        $rootScope.web3.eth.defaultAccount
                    ).then(function (result) {

                            $scope.signedMessage = $scope.messageToSign;
                            // $log.debug("$scope.signedMessage:", $scope.signedMessage);

                            $scope.signature = result;
                            // $log.debug("$scope.signature:", $scope.signature);

                            // $log.debug("$rootScope.web3.eth.defaultAccount:", $rootScope.web3.eth.defaultAccount);
                            // $scope.signatoryAddress = $rootScope.web3.eth.defaultAccount;
                            // $log.debug("$scope.signatoryAddress:", $scope.signatoryAddress);

                            $scope.$apply();
                        }
                    ).catch(function (error) {
                        $log.error("singing error:");
                        $log.error(error);
                        $scope.setAlertDanger(error);
                        $scope.$apply();
                    });
                };

                $scope.signClear = function () {
                    // $log.debug("$scope.signClear started");
                    $scope.signedMessage = null;
                    $scope.signature = null;
                    // $scope.$apply(); // not here
                };

                /* https://codepen.io/shaikmaqsood/pen/XmydxJ/ */
                $scope.copyToClipboard = function (element) {
                    // var $temp = $("<input>");
                    var $temp = $("<textarea></textarea>");
                    $("body").append($temp);
                    console.log('copied to clipboard:');
                    console.log($(element).val());
                    $temp.val(
                        // $(element).text()
                        $(element).val()
                    ).select();
                    document.execCommand("copy");
                    $temp.remove();
                };

                $scope.copySignatureToClipboard = function () {
                    var element = "#signature";
                    $scope.copyToClipboard(element);
                };

                $scope.copySignedTextToClipboard = function () {
                    var element = "#signedText";
                    $scope.copyToClipboard(element);
                };

                /* --- */
                $scope.signedMessageForVerification = "You can verify signature of this text.\n" +
                    "I hope you enjoy this.";
                $scope.signatureForVerification = "0x126aa3255a68438e89ad3627db9579ae4a0d85e5864074276ba878226d0e81ec4b492d9bc2fd0d4216a24264cdfcc3508778ce253b52b5df94dd529ecee8bf0a1b";
                $scope.signatoryAddress = null;
                $scope.signatoryAddressUnknown = null;
                // https://web3js.readthedocs.io/en/1.0/web3-eth-personal.html#ecrecover
                $scope.verifySignature = function () {
                    $scope.signatory = null;
                    https://web3js.readthedocs.io/en/1.0/web3-eth-personal.html#id26
                        $rootScope.web3.eth.personal.ecRecover(
                            $scope.signedMessageForVerification,
                            $scope.signatureForVerification
                        ).then(function (result) {
                                $scope.signatoryAddress = result;
                                $log.debug("$scope.signatoryAddress:", $scope.signatoryAddress);
                                $scope.$apply();

                                if ($scope.contract) {
                                    // https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-call
                                    return $scope.contract.methods.verification($scope.signatoryAddress).call();
                                }
                            }
                        ).then(function (result) {

                            $log.debug('response from smart contract:');
                            $log.debug(result);

                            $scope.signatory = result;
                            if ($scope.signatory.verificationAddedOn > 0) {

                                $log.debug("$scope.signatory:");
                                $log.debug($scope.signatory);

                                $scope.signatory.birthDate = $rootScope.dateFromUnixTime($scope.signatory.birthDate);

                                $scope.signatory.keyCertificateValidUntilDate = $rootScope.dateFromUnixTime($scope.signatory.keyCertificateValidUntil);

                                if ($scope.signatory.keyCertificateValidUntil < $rootScope.unixTimeFromDate(new Date())) {
                                    $scope.signatory.openPGPkeyCertificateExpired = true;
                                }

                                if ($scope.signatory.revokedOn > 0) {
                                    $scope.signatory.revokedOnDate = $rootScope.dateFromUnixTime($scope.signatory.revokedOn)
                                }
                            } else {
                                $scope.signatoryAddressUnknown = true;
                                $log.debug("$scope.signatoryAddressUnknown:", $scope.signatoryAddressUnknown);
                            }

                            $scope.$apply();

                        }).catch(function (error) {
                            $log.error("signature verification error:");
                            $log.error(error);
                            $scope.$apply();
                        });
                }

            }

            function getNetworkInfo() {

                $rootScope.currentNetwork = {};

                // https://web3js.readthedocs.io/en/1.0/web3-eth-net.html#getid
                // Promise returns Number: The network ID
                $rootScope.web3.eth.net.getId()
                    .then(function (result) {

                        $rootScope.currentNetwork.network_id = result; //
                        if (result === 1 || result === 3 || result === 4 || result === 42) {
                            $rootScope.currentNetwork.networkName = $rootScope.networks[result].networkName;
                            $rootScope.currentNetwork.etherscanLinkPrefix = $rootScope.networks[result].etherscanLinkPrefix;
                            $rootScope.currentNetwork.etherscanApiLink = $rootScope.networks[result].etherscanApiLink;
                        } else {
                            $rootScope.currentNetwork.networkName = "unknown network";
                            $rootScope.currentNetwork.etherscanLinkPrefix = "blockchain_explorer";
                            $rootScope.currentNetwork.etherscanApiLink = "blockchainExplorerAPI";
                            $scope.setAlertWarning("Unknown Ethereum network. Network ID: " + result);
                        }

                        $log.debug("$rootScope.currentNetwork.networkName:", $rootScope.currentNetwork.networkName);
                        $rootScope.$apply(); // needed here

                    })
                    .catch(function (error) {
                        $log.error("$rootScope.web3.eth.net.getId() error:");
                        $log.error($rootScope.web3.eth.net.getId());
                    });

                // $rootScope.web3.version.getNetwork(function (error, result) {
                //         if (!error) {
                //             // << MetaMask trick to avoid false $rootScope.web3.isConnected() result above;
                //             $rootScope.getNetworkError = false;
                //             $rootScope.currentNetwork.connected = true;
                //
                //             $log.debug("current network id:", result);
                //             $rootScope.currentNetwork.network_id = result; // "3" for Ropsten, "1" for MainNet etc.
                //             if (result === "1" || result === "2" || result === "3" || result === "4" || result === "42" || result === "5777") {
                //                 $rootScope.currentNetwork.networkName = $rootScope.networks[result].networkName;
                //                 $rootScope.currentNetwork.etherscanLinkPrefix = $rootScope.networks[result].etherscanLinkPrefix;
                //                 $rootScope.currentNetwork.etherscanApiLink = $rootScope.networks[result].etherscanApiLink;
                //             } else {
                //                 $rootScope.currentNetwork.networkName = "unknown network";
                //                 $rootScope.currentNetwork.etherscanLinkPrefix = $rootScope.networks["1"].etherscanLinkPrefix;
                //                 $rootScope.currentNetwork.etherscanApiLink = $rootScope.networks["1"].etherscanApiLink;
                //             }
                //             $log.debug("$rootScope.currentNetwork.networkName:", $rootScope.currentNetwork.networkName);
                //             $rootScope.$apply(); // needed here
                //         } else {
                //             $rootScope.getNetworkError = true;
                //             $rootScope.$apply();
                //             $log.debug("$rootScope.getNetworkError: ", $rootScope.getNetworkError);
                //             $log.debug(error);
                //         }
                //     }
                // );

                // $rootScope.web3.version.getNode(function (error, result) {
                //         if (error) {
                //             $log.debug(error);
                //         } else {
                //             $rootScope.currentNetwork.node = result;
                //             $rootScope.$apply();
                //             $log.debug('web3.version.node: ' + $rootScope.currentNetwork.node);
                //             // "Geth/v1.7.2-stable-1db4ecdc/linux-amd64/go1.9"
                //         }
                //     }
                // );

                // $rootScope.web3.version.getEthereum(function (error, result) {
                //         if (error) {
                //             $log.debug(error);
                //         } else {
                //             $rootScope.currentNetwork.ethereumProtocolVersion = result;
                //             $rootScope.$apply();
                //             // $log.debug('[app.run] web3.version.ethereum: ' + $rootScope.currentNetwork.ethereumProtocolVersion);
                //             // the Ethereum protocol version
                //         }
                //     }
                // );

                $rootScope.currentBlockNumber = null;
                $rootScope.refreshCurrentBlockNumber = function () {
                    $rootScope.web3.eth.getBlockNumber(
                        function (error, result) {
                            if (!error) {
                                $rootScope.currentBlockNumber = result;
                                $log.debug("$rootScope.currentBlockNumber:", $rootScope.currentBlockNumber);
                                $rootScope.$apply();
                                // $log.debug("$rootScope.currentBlockNumber: ", $rootScope.currentBlockNumber);
                            } else {
                                $log.error(error);
                            }
                        }
                    )
                };
                $rootScope.refreshCurrentBlockNumber();

            }

        }]); // end function homeCtl
})();