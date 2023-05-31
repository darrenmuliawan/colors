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
      <div className="flex items-center justify-between bg-gray-600 lg:px-4 px-2 py-2">
        <p className="text-white text-lg lg:text-2xl">{title}</p>
        {onCopy && (
          <Button
            type="text"
            className="text-white text-lg lg:text-2xl px-0 py-0 ring-0 hover:text-white focus:outline-none focus:ring-offset-0 focus:shadow-none focus:ring-0 outline-none active:ring-0 active:outline-none flex items-center"
            onClick={() => onCopy(code)}
          >
            {isOpen ? (
              <CheckmarkIcon height={24} width={24} />
            ) : (
              <CopyIcon height={24} width={24} />
            )}
            <p className="ml-2">{isOpen ? 'Copied!' : 'Copy code'}</p>
          </Button>
        )}
      </div>
      <div className="p-0 text-sm lg:text-lg">
        <Highlight code={code} language={language} theme={getTheme()}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
              <pre style={style} className={classNames('p-2 lg:p-4', className)}>
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
