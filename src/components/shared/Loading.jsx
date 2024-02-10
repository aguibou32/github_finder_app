import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading;