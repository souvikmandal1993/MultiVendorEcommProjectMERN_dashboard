
import {useRoutes} from 'react-router-dom'

const Router = ({allRoutes}) => {
  
    const Routes = useRoutes([...allRoutes])

    return Routes;

}

export default Router