import { useLocation, useParams, useRouteMatch } from "react-router-dom";

import qs from "query-string";
import { useHistory } from "react-router";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let params = useParams();
    const history = useHistory();
    const match = useRouteMatch();

    location = {
      ...location,
      query: qs.parse(location.search),
    };

    return (
      <Component
        {...props}
        location={location}
        params={params}
        history={history}
        match={match}
      />
    );
  }

  return ComponentWithRouterProp;
}

export { withRouter };
