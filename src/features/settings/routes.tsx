import { Route } from "react-router-dom";
import { BaseFeatureRoutes } from "src/router/BaseFeatureRoutes";
import User from "src/features/settings/users/User";
import CreateUser from "src/features/settings/users/Create";
import Role from "src/features/settings/roles/Role";
import CreateRole from "src/features/settings/roles/Create";
import ActivityLog from "src/features/settings/activity/ActivityLog";

class SettingsFeatureRoutes extends BaseFeatureRoutes {
  private readonly base = "settings";
  private readonly users = "users";
  private readonly roles = "roles";

  readonly paths = {
    BASE: `/${this.base}`,
    USERS: {
      INDEX: `/${this.base}/${this.users}`,
      CREATE: `/${this.base}/${this.users}/create`,
    },
    ROLES: {
      INDEX: `/${this.base}/${this.roles}`,
      CREATE: `/${this.base}/${this.roles}/create`,
    },
    ACTIVITY_LOG: "/activity-log",
  } as const;

  render() {
    return (
      <>
        <Route path={this.base}>
          <Route path={this.users}>
            <Route path="" element={<User />} />
            <Route path="create" element={<CreateUser />} />
          </Route>
          <Route path={this.roles}>
            <Route path="" element={<Role />} />
            <Route path="create" element={<CreateRole />} />
          </Route>
        </Route>
        <Route path="activity-log" element={<ActivityLog />} />
      </>
    );
  }
}

export const settingsRoutes = new SettingsFeatureRoutes();
