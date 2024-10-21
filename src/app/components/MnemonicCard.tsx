import React, { useEffect, useState } from 'react';

import { Button } from './Button';
import { Check, Copy } from 'lucide-react';
import DbService from '@/lib/dbUtils';

interface MnemonicCardProps {
  mnemonic: string[];
  title: string;
}



export default function MnemonicCard({ mnemonic, title, }: MnemonicCardProps) {
  const [isMnemonicCopied, setIsMnemonicCopied] = useState(false);


  const copyMnemonic = () => {
    navigator.clipboard.writeText(mnemonic.join(' '));
    setIsMnemonicCopied(true);
    setTimeout(() => setIsMnemonicCopied(false), 2000);
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Secret Phrase ({title})</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
        {mnemonic.map((word, index) => (
          <div key={index} className="bg-gray-700 p-2 rounded text-center">
            {word.length > 0 ? '*'.repeat(6) : ''}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          onClick={copyMnemonic}
          className="flex items-center space-x-2"
        >
          {isMnemonicCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{isMnemonicCopied ? 'Copied!' : 'Copy'}</span>
        </Button>
      </div>

    </div>
  );
}