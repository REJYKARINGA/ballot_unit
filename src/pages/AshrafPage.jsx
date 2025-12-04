import React, { useState } from 'react';

export default function AshrafPage() {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [activeTab, setActiveTab] = useState('ward');
    const [pressedButton, setPressedButton] = useState(null);

    const handleVote = (candidateNumber) => {
        setPressedButton(candidateNumber);
        setTimeout(() => {
            setPressedButton(null);
        }, 300);

        setSelectedCandidate(candidateNumber);
    };

    const wardCandidates = [
        { number: 1, name: 'അബൂബക്കൽ ആച്ചിക്കുളത്ത്', party: '', symbol: '☂️' },
        { number: 2, name: '', party: '', symbol: '' },
        { number: 3, name: '', party: '', symbol: '' },
        { number: 4, name: '', party: '', symbol: '' },
        { number: 5, name: '', party: '', symbol: '' },
        { number: 6, name: '', party: '', symbol: '' },
        { number: 7, name: '', party: '', symbol: '' },
        { number: 8, name: '', party: '', symbol: '' },
        { number: 9, name: '', party: '', symbol: '' },
        { number: 10, name: '', party: '', symbol: '' },
    ];

    const blockCandidates = [
        { number: 1, name: 'അബൂബക്കൽ ആച്ചിക്കുളത്ത്', party: '', symbol: '☂️' },
        { number: 2, name: '', party: '', symbol: '' },
        { number: 3, name: '', party: '', symbol: '' },
        { number: 4, name: '', party: '', symbol: '' },
        { number: 5, name: '', party: '', symbol: '' },
        { number: 6, name: '', party: '', symbol: '' },
        { number: 7, name: '', party: '', symbol: '' },
        { number: 8, name: '', party: '', symbol: '' },
        { number: 9, name: '', party: '', symbol: '' },
        { number: 10, name: '', party: '', symbol: '' },
    ];

    const districtCandidates = [
        { number: 1, name: 'അബൂബക്കൽ ആച്ചിക്കുളത്ത്', party: '', symbol: '☂️' },
        { number: 2, name: '', party: '', symbol: '' },
        { number: 3, name: '', party: '', symbol: '' },
        { number: 4, name: '', party: '', symbol: '' },
        { number: 5, name: '', party: '', symbol: '' },
        { number: 6, name: '', party: '', symbol: '' },
        { number: 7, name: '', party: '', symbol: '' },
        { number: 8, name: '', party: '', symbol: '' },
        { number: 9, name: '', party: '', symbol: '' },
        { number: 10, name: '', party: '', symbol: '' },
    ];

    const getCandidates = () => {
        switch (activeTab) {
            case 'ward':
                return wardCandidates;
            case 'block':
                return blockCandidates;
            case 'district':
                return districtCandidates;
            default:
                return wardCandidates;
        }
    };

    const candidates = getCandidates();

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-blue-700 p-2 flex justify-start items-start font-sans relative overflow-x-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8 animate-fade-in-down">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white text-shadow-lg mb-2">
                        ഇലക്ട്രോണിക് വോട്ടിംഗ് മെഷീൻ
                    </h1>
                    <p className="text-base md:text-lg text-white opacity-90 font-medium uppercase tracking-wider">
                        Electronic Voting Machine - Ballot Unit
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-3 mb-6 animate-fade-in">
                    <button
                        onClick={() => {
                            setActiveTab('ward');
                            setSelectedCandidate(null);
                        }}
                        className={`flex-1 py-4 text-center rounded-2xl font-bold cursor-pointer transition-all duration-300 opacity-50 border-none flex flex-col gap-1 backdrop-blur-sm transform translate-y-0 ${
                            activeTab === 'ward' 
                                ? 'opacity-100 shadow-2xl transform -translate-y-1.5' 
                                : 'hover:transform hover:-translate-y-1 hover:opacity-70'
                        }`}
                        style={{
                            background: activeTab === 'ward' 
                                ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' 
                                : 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
                            color: 'white'
                        }}
                    >
                        <span className="text-lg md:text-xl font-extrabold">വാർഡ്</span>
                        <span className="text-xs font-medium opacity-80 uppercase tracking-wide">Ward</span>
                    </button>
                    
                    <button
                        onClick={() => {
                            setActiveTab('block');
                            setSelectedCandidate(null);
                        }}
                        className={`flex-1 py-4 text-center rounded-2xl font-bold cursor-pointer transition-all duration-300 opacity-50 border-none flex flex-col gap-1 backdrop-blur-sm transform translate-y-0 ${
                            activeTab === 'block' 
                                ? 'opacity-100 shadow-2xl transform -translate-y-1.5' 
                                : 'hover:transform hover:-translate-y-1 hover:opacity-70'
                        }`}
                        style={{
                            background: activeTab === 'block' 
                                ? 'linear-gradient(135deg, #fbb6ce 0%, #f687b3 100%)' 
                                : 'linear-gradient(135deg, #fbb6ce 0%, #f687b3 100%)',
                            color: activeTab === 'block' ? '#831843' : '#831843'
                        }}
                    >
                        <span className="text-lg md:text-xl font-extrabold">ബ്ലോക്ക്</span>
                        <span className="text-xs font-medium opacity-80 uppercase tracking-wide">Block</span>
                    </button>
                    
                    <button
                        onClick={() => {
                            setActiveTab('district');
                            setSelectedCandidate(null);
                        }}
                        className={`flex-1 py-4 text-center rounded-2xl font-bold cursor-pointer transition-all duration-300 opacity-50 border-none flex flex-col gap-1 backdrop-blur-sm transform translate-y-0 ${
                            activeTab === 'district' 
                                ? 'opacity-100 shadow-2xl transform -translate-y-1.5' 
                                : 'hover:transform hover:-translate-y-1 hover:opacity-70'
                        }`}
                        style={{
                            background: activeTab === 'district' 
                                ? 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)' 
                                : 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)',
                            color: activeTab === 'district' ? '#1e40af' : '#1e40af'
                        }}
                    >
                        <span className="text-lg md:text-xl font-extrabold">ജില്ല</span>
                        <span className="text-xs font-medium opacity-80 uppercase tracking-wide">District</span>
                    </button>
                </div>

                {/* Ballot Box */}
                <div className="bg-white rounded-3xl p-9 shadow-2xl animate-fade-in-up relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    
                    {/* Ballot Header */}
                    <div className="flex justify-between items-center mb-8 pb-5 border-b-4 border-gray-100">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">Ready</span>
                            <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-pulse shadow-lg" 
                                 style={{boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)'}}></div>
                        </div>
                        <div className="text-2xl font-extrabold text-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Ballot Unit 1
                        </div>
                    </div>

                    {/* Candidates List */}
                    <div className="mb-5">
                        {candidates.map((candidate) => (
                            <div
                                key={`${activeTab}-${candidate.number}`}
                                className="flex items-center py-4 px-3 border-b-2 border-gray-100 transition-all duration-300 rounded-xl mb-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:transform hover:translate-x-1.5 hover:shadow-sm"
                            >
                                <div className="w-15 text-2xl font-extrabold text-gray-400 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    {candidate.number}
                                </div>

                                <div className="flex-1 flex items-center">
                                    {(candidate.name || candidate.symbol) && (
                                        <div className="flex items-center gap-4 w-full">
                                            {candidate.name && (
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xl font-bold text-gray-800 leading-tight">{candidate.name}</span>
                                                    {candidate.party && <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{candidate.party}</span>}
                                                </div>
                                            )}
                                            {candidate.symbol && <span className="text-3xl filter drop-shadow-sm">{candidate.symbol}</span>}
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-5 items-center">
                                    {/* Red Light - Non-clickable indicator */}
                                    <div
                                        className={`w-11 h-11 rounded-full border-none transition-all duration-500 relative flex items-center justify-center ${
                                            selectedCandidate === candidate.number ? 'animate-red-glow' : ''
                                        }`}
                                        style={{
                                            background: selectedCandidate === candidate.number 
                                                ? 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)' 
                                                : '#991b1b',
                                            boxShadow: selectedCandidate === candidate.number
                                                ? '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.6), 0 0 60px rgba(220, 38, 38, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)'
                                                : '0 2px 6px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.5)'
                                        }}
                                        aria-label="Vote indicator light"
                                    >
                                        <div 
                                            className="w-5 h-5 rounded-full transition-all duration-500"
                                            style={{
                                                background: selectedCandidate === candidate.number 
                                                    ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' 
                                                    : '#991b1b',
                                                boxShadow: selectedCandidate === candidate.number
                                                    ? '0 0 15px rgba(239, 68, 68, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                                                    : 'none'
                                            }}
                                        ></div>
                                    </div>

                                    {/* Blue Button - Clickable */}
                                    <button
                                        onClick={() => handleVote(candidate.number)}
                                        disabled={candidate.number !== 1}
                                        className={`w-25 h-11 rounded-xl border-none cursor-pointer transition-all duration-300 relative overflow-hidden flex items-center justify-center ${
                                            selectedCandidate === candidate.number 
                                                ? 'animate-blue-to-green shadow-lg' 
                                                : ''
                                        } ${
                                            pressedButton === candidate.number ? 'transform translate-y-0.5' : ''
                                        } ${
                                            candidate.number !== 1 ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-0.5 hover:shadow-md'
                                        }`}
                                        style={{
                                            background: selectedCandidate === candidate.number
                                                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                                                : 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                                            boxShadow: selectedCandidate === candidate.number
                                                ? '0 0 30px rgba(16, 185, 129, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 0 60px rgba(16, 185, 129, 0.4)'
                                                : 'inset 0 3px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)'
                                        }}
                                        aria-label={`Vote for ${candidate.name || `Candidate ${candidate.number}`}`}
                                    >
                                        {selectedCandidate === candidate.number && (
                                            <span className="text-white text-2xl font-extrabold text-shadow-md animate-checkmark-pop">
                                                ✓
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-5 pt-5 border-t-2 border-gray-100">
                        <div className="text-center">
                            <p className="text-gray-700 text-base font-bold mb-1.5">
                                നിങ്ങളുടെ തിരഞ്ഞെടുപ്പ് സ്ഥിരീകരിക്കാൻ നീല പെട്ടിയിൽ അമർത്തുക
                            </p>
                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                Press the blue box to confirm your choice
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vote Confirmation */}
                {selectedCandidate && (
                    <div className="fixed bottom-8 right-8 bg-white rounded-2xl p-5 shadow-2xl z-50 border-l-4 border-green-500 animate-slide-in-right">
                        <div className="flex flex-col items-center gap-2">
                            <div 
                                className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-lg animate-scale-in"
                            >
                                ✓
                            </div>
                            <p className="text-gray-800 text-lg font-extrabold">
                                നിങ്ങളുടെ വോട്ട് രേഖപ്പെടുത്തി
                            </p>
                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                Your vote has been recorded
                            </p>
                            <p className="text-green-500 text-sm font-semibold mt-1">
                                Candidate #{selectedCandidate}: {candidates.find(c => c.number === selectedCandidate)?.name}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}