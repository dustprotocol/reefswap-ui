import React, { useContext } from "react"
import Card, { CardTitle } from "../../components/card/Card";

import { AppContext } from "../../context/contexts";
import SwapField from "./SwapField";

interface SwapControllerProps {

}

const SwapController = ({} : SwapControllerProps) => {
  const {accounts, extension, provider} = useContext(AppContext)!;

  return (
    <Card>
      <CardTitle title="Swap" />
      <SwapField />
      <div className="d-flex justify-content-center">
        <div className="btn-content-field border-rad">
          <button className="btn btn-field border-rad hover-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
        </div>
      </div>
      <SwapField />
      <div className="d-flex justify-content-center mt-2">
        <button className="btn btn-reef border-rad w-100">Swap</button>
      </div>
    </Card>
  );
}

export default SwapController;