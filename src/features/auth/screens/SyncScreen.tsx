import * as React from "react";
import Sync from "../components/Sync";
import { useAuth } from "../services/useAuth";
import { AuthNavigatorScreenProps } from "../types";

function SyncScreen({}: AuthNavigatorScreenProps<"Sync">) {
  useAuth();
  return <Sync />;
}

export default SyncScreen;
