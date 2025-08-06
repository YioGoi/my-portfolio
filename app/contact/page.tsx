import SectionWrapper from '@/components/SectionWrapper';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ContactPage() {
  const codeString = `{
  "email": "ydogan.dev@gmail.com",
  "phone": "+90 532 510 1204",
  "location": "Istanbul, Türkiye"
}`;

  return (
    <SectionWrapper variant="fade">
      <h1 className="underline-title">Contact</h1>
      <SyntaxHighlighter language="json" style={duotoneDark} customStyle={{
        borderRadius: '10px',
        padding: '1.5rem',
        fontSize: '0.95rem',
      }}>
        {codeString}
      </SyntaxHighlighter>
    </SectionWrapper>
  );
}
