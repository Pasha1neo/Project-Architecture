import { text } from '../../common/text';
import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR, spacing } from '../../theme';

export function TextError({ tid, children }) {
  return <Text>{text(tid) || children}</Text>;
}

const Text = styled.span`
  margin: ${spacing(1)};
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_ERROR};
`;
