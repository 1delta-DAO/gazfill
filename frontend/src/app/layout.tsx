"use client";

import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import { FuelProvider } from "@fuels/react";
import React, { ReactNode, useMemo, useSyncExternalStore } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "fuels";
import {
  BakoSafeConnector,
  BurnerWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  FueletWalletConnector,
  WalletConnectConnector,
} from "@fuels/connectors";
import { NODE_URL } from "@/lib";
import { ActiveWalletProvider } from "@/hooks/useActiveWallet";

/**
 * react-query is a peer dependency of @fuels/react, so we set it up here.
 * See https://docs.fuel.network/docs/wallet/dev/getting-started/#installation-1
 */
const queryClient = new QueryClient();

const subscribeToMount = () => () => {};
const hasMounted = () => true;
const hasNotMounted = () => false;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const isMounted = useSyncExternalStore(subscribeToMount, hasMounted, hasNotMounted);

  return (
    <html lang="en" className="bg-zinc-800 text-white" data-theme="mytheme">
      <head>
        <link rel="icon" href="/fuel.ico" />
        <title>Gazfill</title>
      </head>
      <body className="!overflow-y-auto">
        {isMounted && <WalletProviders>{children}</WalletProviders>}
      </body>
    </html>
  );
}

function WalletProviders({ children }: RootLayoutProps) {
  const providerToUse = useMemo(() => new Provider(NODE_URL).init(), []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <FuelProvider
          fuelConfig={{
            connectors: [
              new FuelWalletConnector(),
              new BurnerWalletConnector({ fuelProvider: providerToUse }),
              new WalletConnectConnector({ fuelProvider: providerToUse }),
              new BakoSafeConnector(),
              new FueletWalletConnector(),
              new FuelWalletDevelopmentConnector(),
            ],
          }}
        >
          <ActiveWalletProvider>
            <Layout>{children}</Layout>
          </ActiveWalletProvider>
        </FuelProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
