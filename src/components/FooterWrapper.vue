<template>
    <div class="footer">
        <el-container class="container-xxl">
            <!-- <el-aside class="responsive-aside"></el-aside> -->
            <el-main>
                <el-row class="footer-box">
                    <el-col :span="24">
                        <div class="grid-content ep-bg-purple footertop">
                            <div class="footertop-left">
                                <el-icon>
                                    <Message />
                                </el-icon>
                                <el-icon>
                                    <Filter />
                                </el-icon>
                                <el-icon>
                                    <Discount />
                                </el-icon>
                            </div>
                            <div>
                                <el-backtop icon="Upload" :right="100" :bottom="100" />
                                <!-- <el-icon><Upload /></el-icon> -->
                                <!-- <span>Back to Top</span> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="footerbox-center">
                    <el-col :span="6" :xs="24" :sm="12" :md="6" :lg="6">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h2 style="font-size: 16px; color: #212529; font-weight: 500;">Powered by MNT Beacon Chain
                            </h2>
                            <el-button @click="addWork" style="width: 50%;" type="info" plain>
                                <svg-icon name="fox" width="0.8rem" height="0.8rem"
                                    style="margin-right: 10px"></svg-icon>
                                <span style="font-size: 12.5625px; color: #081D35;">Add MNT Network</span>
                            </el-button>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="6">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4 style="font-size: 14.4992px; color: #212529; font-weight: 500;">Company</h4>
                            <el-link href="https://element-plus.org" :underline="false">Delegate to MntScan</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Brand Assets</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Contact Us</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Terms & Privacy </el-link>
                            <el-link href="https://element-plus.org" :underline="false">Bug Bounty<el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="6">
                        <div class="grid-content ep-bg-purple footer-center">
                            <h4 style="font-size: 14.4992px; color: #212529; font-weight: 500;">Community</h4>
                            <el-link href="https://element-plus.org" :underline="false">API Documentation</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Knowledge Base</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Network Status</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Learn MNT <el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="12" :md="6" :lg="6">
                        <div class="grid-content ep-bg-purple footer-center footer-Products">
                            <h4 style="font-size: 14.4992px; color: #212529; font-weight: 500;">Products & Services</h4>
                            <el-link href="https://element-plus.org" :underline="false">Advertise<el-icon>
                                    <Position />
                                </el-icon></el-link>
                            <el-link href="https://element-plus.org" :underline="false">Explorer-as-a-Service
                                (EaaS)<el-icon>
                                    <Position />
                                </el-icon></el-link>
                            <el-link href="https://element-plus.org" :underline="false">API Plans </el-link>
                            <el-link href="https://element-plus.org" :underline="false">Priority Support</el-link>
                            <el-link href="https://element-plus.org" :underline="false">Blockscan <el-icon>
                                    <Promotion />
                                </el-icon> </el-link>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="footer-box">
                    <el-col :span="24">
                        <div class="grid-content ep-bg-purple footer-bottom">
                            <span>Etherscan © 2024 (F1)</span>
                            <span>Donations: 0x71c765...d8976f </span>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <!-- <el-aside class="responsive-aside"></el-aside> -->
        </el-container>
    </div>
</template>

<script setup>
import {config} from '@/config/config'
async function addWork() {
    try {
        if (typeof ethereum !== 'undefined') {
            const provider = ethereum;
            let chainName = location.hostname == config.domainUser_url ? 'MNT Mainnet' : 'MNT Testnet';
            const chainId = location.hostname == config.domainUser_url ? '0x2277' : '0x66';
            const blockExplorerUrls = location.hostname == config.domainUser_url ? 'https://main.metabasenet.site/' : 'https://test.metabasenet.site/'
            const rpcUrl = location.hostname == config.domainUser_url ? config.rpc_testAdress : config.rpc_TestAddress;
            await provider.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId,
                        rpcUrls: [rpcUrl],
                        chainName,
                        nativeCurrency: {
                            name: 'MNT',
                            symbol: 'MNT',
                            decimals: 18,
                        },
                        blockExplorerUrls: [blockExplorerUrls],
                    },
                ],
            });
            provider.on('chainChanged', (chainId) => {
                if (chainId === networkId.toString(16)) {
                    console.log('Network added and activated successfully!');
                }
            });
            await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId }] });
        } else {
            console.error('MetaMask is not installed!');
        }
    } catch (error) {
        console.error('Error adding network:', error);

    }
}
</script>

<style scoped>
.responsive-aside {
    width: 0rem;
    transition: width 0.5s ease;
}

@media (min-width: 768px) {
    .responsive-aside {
        /* width: 10rem; */
        width: 3vw;
        opacity: 0.5;
        /* background-color: #fff;  */
    }
}
@media (max-width: 768px) {
    .footer-Products{
        margin-top: 20px;
    }
}
.footer {
    width: 100%;
    /* position: fixed;
  bottom: 0; */
    background-color: #f8f9fa;
}

.footer-box {
    /* margin-top: 1.25rem; */
    /* margin-left: 1.25rem; */
    margin-right: 1.25rem;
    /* background-color: #f8f9fa; */
}

.footertop-left .el-icon {
    margin-right: 10px;
}

.footer-center {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    padding-top: 10px;
}

.footer-center .el-button {
    margin-top: 10px;
    font-size: 13px;
}

.footer-center .el-text {
    font-weight: bold;
    font-size: large;
    color: var(--bs-heading-color, inherit);
}

.footer-center .el-link {
    margin-top: 10px;
    font-size: 13px;
}

.footertop {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e9ecef;
}

.footerbox-center {
    padding: 2rem 0;
    border-bottom: 1px solid #e9ecef;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
}

.footer-bottom span {
    padding: 20px 0;
}
</style>