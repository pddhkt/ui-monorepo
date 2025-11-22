import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-sm">
        <code className="font-mono text-foreground">{code}</code>
      </pre>
      <motion.button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={copied ? 'Copied' : 'Copy code'}
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </motion.button>
    </div>
  );
}
