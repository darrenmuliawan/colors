import { Button } from 'components/Button';
import { classNames } from 'utils';
import { Highlight, themes } from 'prism-react-renderer';
import { ReactComponent as CopyIcon } from 'assets/svg/copy.svg';
import { ReactComponent as CheckmarkIcon } from 'assets/svg/checkmark.svg';
import { useInfoPopup } from 'hooks';

interface CodeBlockProps {
  code: string;
  title: string;
  language?: string;
  theme?: string;
  onCopy?: (code: string) => void;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { code, title, language = 'typescript', theme, onCopy } = props;
  const { isOpen } = useInfoPopup();

  const getTheme = () => {
    if (theme === 'vsDark') {
      return themes.vsDark;
    }

    return themes.vsDark;
  };

  return (
    <div className="rounded-lg bg-black">
      <div className="flex items-center justify-between bg-gray-600 px-8 py-4">
        <p className="text-white text-5xl">{title}</p>
        {onCopy && (
          <Button
            type="text"
            className="text-white text-5xl px-0 py-0 ring-0 hover:text-white focus:outline-none focus:ring-offset-0 focus:shadow-none focus:ring-0 outline-none active:ring-0 active:outline-none flex items-center"
            onClick={() => onCopy(code)}
          >
            {isOpen ? (
              <CheckmarkIcon height={48} width={48} />
            ) : (
              <CopyIcon height={48} width={48} />
            )}
            <p className="ml-2">{isOpen ? 'Copied!' : 'Copy code'}</p>
          </Button>
        )}
      </div>
      <div className="p-0 text-3xl">
        <Highlight code={code} language={language} theme={getTheme()}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
              <pre style={style} className={classNames('p-7', className)}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} className="whitespace-pre" />
                    ))}
                  </div>
                ))}
              </pre>
            );
          }}
        </Highlight>
      </div>
    </div>
  );
};
