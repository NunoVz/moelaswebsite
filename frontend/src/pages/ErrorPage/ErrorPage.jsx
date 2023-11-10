import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

// * This page is shown when the user tries to access a non-existent route

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="center-column fullscreen">
      <h1>Oops!</h1>
      <p>Algo de errado não está certo</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}