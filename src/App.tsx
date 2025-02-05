import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, Download, ExternalLink, Shield, ShieldAlert } from 'lucide-react';

function App() {
  const [showAlteredState, setShowAlteredState] = useState(false);

  const originalNFT = {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=600&fit=crop",
    name: "Crypto Punk #1337",
    rarity: "Legendary",
    powerLevel: 9000,
    marketplace: "https://opensea.io/collection/genuine-collection"
  };

  const alteredNFT = {
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    name: "Cyrpto Punk #1337",
    rarity: "Common",
    powerLevel: 1,
    marketplace: "https://malicious-marketplace.example"
  };

  const currentNFT = showAlteredState ? alteredNFT : originalNFT;

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    // Create a blob with text content
    const content = `
NFT Metadata Security Guide

1. Understanding NFT Metadata
- Metadata includes images, attributes, and links
- Can be stored on-chain or off-chain
- Immutability depends on storage method

2. Storage Types
Immutable Storage:
- On-chain metadata storage
- Decentralized storage (IPFS with pinning)
- Permanent and verifiable
- Higher gas costs

Mutable Storage:
- Centralized servers
- Unpinned IPFS content
- Can be modified or deleted
- Lower initial costs

3. Best Practices
- Always verify smart contract code
- Check metadata storage location
- Use NFT verification tools
- Prefer on-chain metadata when possible
- Verify IPFS content is properly pinned

4. Red Flags
- Unclear metadata storage methods
- Unpinned IPFS content
- Centralized storage without backups
- Missing smart contract verification

For more information, visit: https://ethereum.org/en/nft/

Security Awareness Guide by Shashank Moharir
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nft-metadata-security-guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            NFT Metadata Tampering
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            See how NFT metadata can change after minting and why it matters
          </p>
          <button
            onClick={scrollToDemo}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-all hover:scale-105"
          >
            Explore Metadata Changes
          </button>
          <ChevronDown className="w-8 h-8 mx-auto mt-12 animate-bounce text-purple-400" />
        </div>
      </header>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* NFT Card */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-purple-500/20 shadow-xl shadow-purple-500/10">
              <div className="relative">
                <img
                  src={currentNFT.image}
                  alt="NFT"
                  className="w-full h-[400px] object-cover rounded-lg mb-4 transition-all duration-500"
                />
                <div className="absolute top-2 right-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    showAlteredState ? 'bg-red-500' : 'bg-green-500'
                  }`}>
                    {currentNFT.rarity}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{currentNFT.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Power Level: {currentNFT.powerLevel}</p>
                <a
                  href={currentNFT.marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                >
                  View on Marketplace <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Controls & Explanation */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-red-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold">Metadata Tampering Demo</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Toggle the switch below to see how NFT metadata can be altered after minting,
                  potentially deceiving buyers and collectors.
                </p>
                <button
                  onClick={() => setShowAlteredState(!showAlteredState)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    showAlteredState
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {showAlteredState ? 'Show Original Metadata' : 'Show Altered Metadata'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Understanding NFT Metadata Storage</h2>
          
          {/* Storage Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold">Immutable Storage</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• On-chain metadata storage</li>
                <li>• Decentralized storage (IPFS with pinning)</li>
                <li>• Permanent and verifiable</li>
                <li>• Higher gas costs</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold">Mutable Storage</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Centralized servers</li>
                <li>• Unpinned IPFS content</li>
                <li>• Can be modified or deleted</li>
                <li>• Lower initial costs</li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gray-800 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Protecting Yourself</h3>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-500/20 rounded">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <span>Always verify the smart contract code before purchasing valuable NFTs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-500/20 rounded">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <span>Check if metadata is stored on-chain or uses permanent IPFS storage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-500/20 rounded">
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <span>Use NFT verification tools to analyze metadata storage methods</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://ethereum.org/en/nft/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
              >
                Learn More <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all"
              >
                Download Guide <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center bg-gray-800">
        <p className="font-bold text-gray-300">By Shashank Moharir</p>
      </footer>
    </div>
  );
}

export default App;