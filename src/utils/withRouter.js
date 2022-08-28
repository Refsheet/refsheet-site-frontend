import {
  useLocation,
  useParams
} from "react-router-dom";

import qs from 'query-string';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let params = useParams();

    location = {
      ...location,
      query: qs.parse(location.search)
    }

    return (
      <Component
        {...props}
        {...{location, params}}
      />
    );
  }

  return ComponentWithRouterProp;
}

export {withRouter};
