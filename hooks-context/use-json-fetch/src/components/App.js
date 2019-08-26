import React, {Fragment} from 'react';
import useJsonFetch from '../hooks/useJsonFetch'


function ScopeHook({url}) {
  const [data, loading, error] = useJsonFetch(url)
  
  return (
    <div>
      <p>{data && `data.status - ${data.status}`}</p>
      <p>{loading && `Loading...`}</p>
      <p>{`Error` && error}</p>
    </div>
  )
}

export default function App() {

  return (
    <Fragment>
      <ScopeHook url={`${process.env.REACT_APP_DATA_URL}/data`}/>
      <ScopeHook url={`${process.env.REACT_APP_DATA_URL}/loading`} />
      <ScopeHook url={`${process.env.REACT_APP_DATA_URL}/error`} />
    </Fragment>
  );
}
