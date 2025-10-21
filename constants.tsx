import React from 'react';
import type { WhitepaperSection } from './types';
import { Lightbulb, ShieldCheck, Zap, Globe, Droplets, Smile, Landmark, HeartHandshake, Bot, BookCheck, Rocket, Users, Target, Lock } from 'lucide-react';

const Term = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-slate-800 text-cyan-300 px-2 py-1 rounded-md font-mono text-sm tracking-tight">{children}</code>
);

export const WHITEPAPER_SECTIONS: WhitepaperSection[] = [
  {
    id: 'executive-summary',
    title: '1. Executive Summary',
    content: (
      <p>
        The JUSDC Ecosystem is a decentralized, multi-chain stablecoin platform designed to provide secure, scalable, and transparent digital finance tools. Powered by <Term>JUSDC</Term>, <Term>JUSDT</Term>, <Term>wUSDC</Term>, and <Term>wUSDT</Term> tokens, the ecosystem integrates DeFi capabilities with cross-chain infrastructure, ensuring seamless token operations across Ethereum, BNB Smart Chain, Polygon, and Base networks.
      </p>
    ),
  },
  {
    id: 'introduction',
    title: '2. Introduction',
    content: (
      <p>
        In a world increasingly adopting digital assets, stablecoins are essential for providing price stability. JUSDC aims to become the most secure, transparent, and user-centric stablecoin ecosystem, delivering financial tools for users, developers, and institutions.
      </p>
    ),
  },
  {
    id: 'problem-statement',
    title: '3. Problem Statement',
    content: (
      <p>
        Current stablecoins face issues like centralization, lack of auditability, limited cross-chain support, and poor user experience. There’s a pressing need for a stablecoin ecosystem that is transparent, secure, decentralized, and interoperable.
      </p>
    ),
  },
  {
    id: 'ecosystem',
    title: '4. The JUSDC Ecosystem',
    content: (
      <>
        <h3 className="text-2xl font-semibold text-slate-200 mt-6 mb-4">JUSDC Token</h3>
        <p>An Ethereum-based USD-pegged stablecoin with 18 decimals.</p>
        <h3 className="text-2xl font-semibold text-slate-200 mt-6 mb-4">JUSDT Token</h3>
        <p>An Ethereum-based counterpart to JUSDC, representing a parallel peg.</p>
        <h3 className="text-2xl font-semibold text-slate-200 mt-6 mb-4">wUSDC / wUSDT</h3>
        <p>Wrapped versions of the stablecoins optimized for low-decimal networks like Polygon and Base (6 decimals).</p>
      </>
    ),
  },
  {
    id: 'core-features',
    title: '5. Core Features',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <BookCheck className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Transparency</h4>
          <p className="text-sm text-slate-400">On-chain verifiable data and immutable metadata stored on IPFS.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Security</h4>
          <p className="text-sm text-slate-400">Rigorous smart contract audits and robust private key protection.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Zap className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Scalability</h4>
          <p className="text-sm text-slate-400">Modular architecture with efficient token minting and transfer protocols.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Globe className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Interoperability</h4>
          <p className="text-sm text-slate-400">Deployed on Ethereum, BSC, Polygon, Base with bridge simulation.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Droplets className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Liquidity</h4>
          <p className="text-sm text-slate-400">Supported on major DEXs with planned LP rewards.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Smile className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">User Experience (UX)</h4>
          <p className="text-sm text-slate-400">Responsive DApp with WalletConnect v2 and a dynamic dashboard.</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Landmark className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Regulatory Compliance</h4>
          <p className="text-sm text-slate-400">KYC/AML framework for major events like presales and staking.</p>
        </div>
         <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <HeartHandshake className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Resilience</h4>
          <p className="text-sm text-slate-400">On-chain error handling and backup IPFS endpoints for reliability.</p>
        </div>
         <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Bot className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Automation</h4>
          <p className="text-sm text-slate-400">Auto-refreshing UI and future monitoring/alert systems.</p>
        </div>
         <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <BookCheck className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Audibility & Reporting</h4>
          <p className="text-sm text-slate-400">Real-time analytics with comprehensive transaction logging.</p>
        </div>
         <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
          <Lightbulb className="w-8 h-8 text-cyan-400 mb-3" />
          <h4 className="font-bold text-slate-100 text-lg mb-2">Innovation</h4>
          <p className="text-sm text-slate-400">Advanced price peg mechanism with Chainlink oracles.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'tokenomics',
    title: '6. Tokenomics',
    content: (
       <>
        <h3 className="text-2xl font-semibold text-slate-200 mt-6 mb-4">Total Supply: 37.9 Billion</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>35B JUSDC on Ethereum (vault-locked until Dec 12, 2025)</li>
            <li>1B on Polygon</li>
            <li>1B on Base</li>
            <li>Circulating supply determined by on-chain minting events</li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-200 mt-8 mb-4">Allocation</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><span className="font-bold text-slate-300">70%</span> Liquidity (Vault-locked)</li>
            <li><span className="font-bold text-slate-300">10%</span> Community & Governance</li>
            <li><span className="font-bold text-slate-300">10%</span> Ecosystem & Partnerships</li>
            <li><span className="font-bold text-slate-300">5%</span> Reserve</li>
            <li><span className="font-bold text-slate-300">5%</span> Team & Dev</li>
        </ul>
       </>
    ),
  },
   {
    id: 'technical-architecture',
    title: '7. Technical Architecture',
    content: (
        <ul className="list-none space-y-4">
            <li><strong className="font-semibold text-slate-200">Smart Contracts:</strong> Standard ERC-20 contracts per network.</li>
            <li><strong className="font-semibold text-slate-200">Bridging Logic:</strong> Simulated frontend until official bridge integration.</li>
            <li><strong className="font-semibold text-slate-200">Chainlink Oracles:</strong> Price feed and peg assurance.</li>
            <li><strong className="font-semibold text-slate-200">IPFS:</strong> Metadata and audit reports stored off-chain.</li>
        </ul>
    ),
  },
   {
    id: 'use-cases',
    title: '8. Use Cases',
    content: (
        <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Stable payments in DeFi apps</li>
            <li>Cross-chain value transfer</li>
            <li>DAO governance (planned)</li>
            <li>Native staking (future update)</li>
        </ul>
    ),
  },
  {
    id: 'dapp-overview',
    title: '9. DApp Overview',
    content: (
       <>
        <p>The DApp includes the following live modules:</p>
        <ul className="list-disc list-inside space-y-2 mt-4 text-slate-400">
            <li><strong className="font-semibold text-slate-200">Mint:</strong> Authorized minting of JUSDC/JUSDT.</li>
            <li><strong className="font-semibold text-slate-200">Send:</strong> Wallet-to-wallet transfers with ENS support.</li>
            <li><strong className="font-semibold text-slate-200">Swap:</strong> Native-to-stablecoin swaps via DEX routers.</li>
            <li><strong className="font-semibold text-slate-200">Bridge:</strong> Simulated multi-chain transfer UI.</li>
            <li><strong className="font-semibold text-slate-200">Dashboard:</strong> Real-time token portfolio analytics.</li>
        </ul>
       </>
    ),
  },
    {
    id: 'compliance',
    title: '10. Compliance & Legal',
    content: (
       <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Smart contract audits (3rd party)</li>
            <li>KYC/AML procedures for fundraising</li>
            <li>Legal opinions being prepared for listing</li>
        </ul>
    ),
  },
  {
    id: 'roadmap',
    title: '11. Roadmap',
    content: (
      <div className="overflow-x-auto">
        <table className="w-full mt-6 text-left border-collapse">
            <thead className="bg-slate-800">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wider text-slate-300 uppercase border-b-2 border-slate-700">Phase</th>
                    <th className="p-3 text-sm font-semibold tracking-wider text-slate-300 uppercase border-b-2 border-slate-700">Milestone</th>
                    <th className="p-3 text-sm font-semibold tracking-wider text-slate-300 uppercase border-b-2 border-slate-700">Date</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/50">
                    <td className="p-3 border-b border-slate-700 text-cyan-400">Phase 1</td>
                    <td className="p-3 border-b border-slate-700">Token deployment (all chains)</td>
                    <td className="p-3 border-b border-slate-700">Q2 2025</td>
                </tr>
                <tr className="hover:bg-slate-800/50">
                    <td className="p-3 border-b border-slate-700 text-cyan-400">Phase 2</td>
                    <td className="p-3 border-b border-slate-700">Dashboard + Mint/Send/Swap</td>
                    <td className="p-3 border-b border-slate-700">Q3 2025</td>
                </tr>
                <tr className="hover:bg-slate-800/50">
                    <td className="p-3 border-b border-slate-700 text-cyan-400">Phase 3</td>
                    <td className="p-3 border-b border-slate-700">Bridge simulation & Analytics</td>
                    <td className="p-3 border-b border-slate-700">Q3 2025</td>
                </tr>
                <tr className="hover:bg-slate-800/50">
                    <td className="p-3 border-b border-slate-700 text-cyan-400">Phase 4</td>
                    <td className="p-3 border-b border-slate-700">CEX listings & Governance</td>
                    <td className="p-3 border-b border-slate-700">Q4 2025</td>
                </tr>
                 <tr className="hover:bg-slate-800/50">
                    <td className="p-3 border-b border-slate-700 text-cyan-400">Phase 5</td>
                    <td className="p-3 border-b border-slate-700">Staking + DAO Launch</td>
                    <td className="p-3 border-b border-slate-700">Q1 2026</td>
                </tr>
            </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'team',
    title: '12. Team',
    content: (
        <p>
            Core contributors are experienced in smart contracts, frontend, backend, and compliance. Team structure is decentralized with multi-sig governance in progress.
        </p>
    ),
  },
  {
    id: 'community-governance',
    title: '13. Community & Governance',
    content: (
        <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Twitter, GitHub, Discord live</li>
            <li>Governance tokens to be distributed via community vault in Phase 4</li>
        </ul>
    ),
  },
   {
    id: 'conclusion',
    title: '14. Conclusion',
    content: (
        <p>
            JUSDC Ecosystem is not just another stablecoin project — it’s a decentralized, transparent, and secure financial layer for real-world adoption. Built with resilience, innovation, and user-centric design, it is poised to lead the next generation of DeFi infrastructure.
        </p>
    ),
  },
];
