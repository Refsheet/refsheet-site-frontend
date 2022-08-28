import {
  useLocation,
  useParams
} from "react-router-dom";

import qs from 'query-string';
import {useHistory} from "react-router";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let params = useParams();
    const history = useHistory();

    location = {
      ...location,
      query: qs.parse(location.search)
    }

    return (
      <Component
        {...props}
        location={location}
        params={params}
        history={history}
      />
    );
  }

  return ComponentWithRouterProp;
}

export {withRouter};
