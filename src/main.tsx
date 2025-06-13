import { BaseParagraphPlugin } from '@udecode/plate';
import { SoftBreakPlugin } from '@udecode/plate-break/react';
import { createPlateEditor } from '@udecode/plate-core/react';
import { Plate, PlateContent } from '@udecode/plate/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const editor = createPlateEditor({
    plugins: [BaseParagraphPlugin, SoftBreakPlugin],
    value: INITIAL_VALUE,
  });

  return (
    <Plate editor={editor}>
      <PlateContent
        placeholder="Type..."
        style={{ width: 500, height: '90vh', overflowY: 'auto', border: '1px solid black' }}
      />
    </Plate>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const p = () => ({
  type: BaseParagraphPlugin.key,
  children: [
    {
      text: 'This is a paragraph in a long text that makes the editor scroll. Now go to the bottom and insert soft breaks by pressing Shift + Enter. The editor should now automatically scroll upwards. Oh, and make sure you are using Chrome.',
    },
  ],
});

const INITIAL_VALUE = new Array(50).fill(0).map(p);
