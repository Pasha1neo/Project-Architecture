import { text } from '../../common/text';
import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../theme';

export function TextSecondary({
  tid = null,
  children = null,
  pre = null,
  post = null,
}) {
  return (
    <Text>
      {pre && text(pre)}
      {text(tid) || children}
      {post && text(post)}
    </Text>
  );
}

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_SECONDARY};
`;
