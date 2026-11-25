// Custom blocks for the Sveltia CMS rich-text editor. Each inserts the MDX snippet that
// the Astro components understand, and recognises it again when you reopen the post.
// Attribute values may not contain double quotes (they are swapped for typographic quotes).

const clean = (v) => String(v ?? '').replace(/"/g, '\u201D').replace(/\s*\n\s*/g, ' ').trim();
const attrs = (str) => {
  const out = {};
  for (const m of str.matchAll(/(\w+)="([^"]*)"/g)) out[m[1]] = m[2];
  return out;
};
const line = (name, value) => (value ? `  ${name}="${clean(value)}"\n` : '');

CMS.registerEditorComponent({
  id: 'chart-figure',
  label: 'Chart figure',
  fields: [
    { name: 'src', label: 'Image', widget: 'image' },
    { name: 'alt', label: 'Alt text (describe what the chart shows, with key numbers)', widget: 'text' },
    { name: 'caption', label: 'Caption (include unit and period)', widget: 'string' },
    { name: 'takeaway', label: 'Key takeaway (optional)', widget: 'string', required: false },
    { name: 'methodology', label: 'Units and method (optional)', widget: 'text', required: false },
    { name: 'source', label: 'Source name (optional)', widget: 'string', required: false },
    { name: 'sourceUrl', label: 'Source URL (optional)', widget: 'string', required: false },
  ],
  pattern: /^<ChartFigure\s+([\s\S]*?)\/>$/,
  fromBlock: (m) => attrs(m[1]),
  toBlock: (d) =>
    `<ChartFigure\n${line('src', d.src)}${line('alt', d.alt)}${line('caption', d.caption)}${line('takeaway', d.takeaway)}${line('methodology', d.methodology)}${line('source', d.source)}${line('sourceUrl', d.sourceUrl)}/>`,
  toPreview: (d) => `<figure><img src="${d.src}" alt="${clean(d.alt)}" style="max-width:100%"><figcaption><b>${clean(d.caption)}</b></figcaption></figure>`,
});

CMS.registerEditorComponent({
  id: 'youtube-embed',
  label: 'YouTube video',
  fields: [
    { name: 'id', label: 'Video ID (the part after v= in the URL)', widget: 'string' },
    { name: 'title', label: 'Video title', widget: 'string' },
    { name: 'summary', label: 'Text summary / takeaway (shown under the video; good for search)', widget: 'text' },
    { name: 'channel', label: 'Channel (optional)', widget: 'string', required: false },
  ],
  pattern: /^<YouTubeEmbed\s+([\s\S]*?)\/>$/,
  fromBlock: (m) => attrs(m[1]),
  toBlock: (d) => `<YouTubeEmbed\n${line('id', d.id)}${line('title', d.title)}${line('channel', d.channel)}${line('summary', d.summary)}/>`,
  toPreview: (d) => `<p>Video: <b>${clean(d.title)}</b> (${clean(d.id)})<br>${clean(d.summary)}</p>`,
});

CMS.registerEditorComponent({
  id: 'data-table',
  label: 'Data table',
  fields: [
    { name: 'caption', label: 'Table caption (include unit and period)', widget: 'string' },
    { name: 'note', label: 'Units / method note (optional)', widget: 'text', required: false },
    { name: 'source', label: 'Source name (optional)', widget: 'string', required: false },
    { name: 'sourceUrl', label: 'Source URL (optional)', widget: 'string', required: false },
    {
      name: 'table',
      label: 'Markdown table (put the unit in each column header)',
      widget: 'text',
      default: '| Item | Value (unit) |\n| --- | --- |\n| Example | 0 |',
    },
  ],
  pattern: /^<DataTable\s+([\s\S]*?)>\s*\n\n([\s\S]*?)\n\n<\/DataTable>$/,
  fromBlock: (m) => ({ ...attrs(m[1]), table: m[2].trim() }),
  toBlock: (d) =>
    `<DataTable\n${line('caption', d.caption)}${line('note', d.note)}${line('source', d.source)}${line('sourceUrl', d.sourceUrl)}>\n\n${(d.table ?? '').trim()}\n\n</DataTable>`,
  toPreview: (d) => `<p><b>${clean(d.caption)}</b></p><pre>${d.table ?? ''}</pre>`,
});
