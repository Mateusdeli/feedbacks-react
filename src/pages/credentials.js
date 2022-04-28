import PrivateRoute from '../components/PrivateRoute'
import CredentialsTemplate from '../templates/Credentials'

export default function Credentials() {
  return (
    <PrivateRoute>
      <CredentialsTemplate />
    </PrivateRoute>
  )
}
