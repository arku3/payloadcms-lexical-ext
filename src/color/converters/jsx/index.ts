import { HeadingJSXConverter } from './Heading';
import { ParagraphJSXConverter } from './Paragraph';
import { TextJSXConverter } from './Text';

export default {
	...HeadingJSXConverter,
	...ParagraphJSXConverter,
	...TextJSXConverter,
};
