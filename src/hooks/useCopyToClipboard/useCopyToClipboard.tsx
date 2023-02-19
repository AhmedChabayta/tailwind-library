import { useState } from 'react';

type CopyToClipboardResult = {
  isCopied: boolean;
  error?: Error;
};

const useCopyToClipboard = (): [(text: string) => void, CopyToClipboardResult] => {
  const [result, setResult] = useState<CopyToClipboardResult>({ isCopied: false });

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      setResult({ isCopied: false, error: new Error('Clipboard API not available') });
      return;
    }

    navigator.clipboard.writeText(text)
      .then(() => {
        setResult({ isCopied: true });
      })
      .catch((error) => {
        setResult({ isCopied: false, error });
      });
  };

  return [copyToClipboard, result];
};

export default useCopyToClipboard;
