import React from 'react';
import type { JSXConverters } from '@payloadcms/richtext-lexical/react';
import type { SerializedCustomHeadingNode } from 'src/color/types';

export const HeadingJSXConverter: JSXConverters<SerializedCustomHeadingNode> = {
	'custom-heading': ({ node, nodesToJSX }) => {
		const children = nodesToJSX({
			nodes: node.children,
		});
		const NodeTag = node.tag;
		const style: React.CSSProperties = {};
		const match: string[] | null = node.style?.match(/background-color: ([^;]+)/);
		if (match) {
			style.backgroundColor = match[1];
		}
		return <NodeTag style={style}>{children}</NodeTag>;
	},
};
