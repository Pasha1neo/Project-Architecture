import {
  PageLayout,
  ListLayout,
  AuthLayout,
  ContentLayout,
  SectionLayout,
} from '../../lib/elements/layout';
import { UsersContainer } from './users.container';

export function UsersPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <SectionLayout>
          <AuthLayout>
            <ListLayout>
              <UsersContainer />
            </ListLayout>
          </AuthLayout>
        </SectionLayout>
      </PageLayout>
    </ContentLayout>
  );
}
