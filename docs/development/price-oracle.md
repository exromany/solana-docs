# Price oracle

At its core, Lido for Solana (“Solido” for short) enables converting SOL into
stSOL and back. This conversion involves an exchange rate. The exchange rate
used by Solido is stored on-chain in the Solido instance itself. This page
explains how to access it. To understand how the exchange rate is set, see [the
internals page about the exchange rate](../internals/exchange-rate).

## On-chain

:::note
The details in this section are based on v0.4.0 of the Solido program. Please
confirm that this information is still up to date before building on it. The
source code is always the source of truth. For v0.4.0, the relevant field
is [`Lido::exchange_rate`][src-v0.4.0].
:::

[src-v0.4.0]: https://github.com/ChorusOne/solido/blob/v0.4.0/program/src/state.rs#L191

Solido stores two values that together determine the exchange rate:

 * The amount of stSOL in existence, `st_sol_supply`.
 * The amount of SOL managed, `sol_balance`.

Both are represented as a little-endian `u64` that holds the number of lamports.
`st_sol_supply` is stored in in the Solido account data at byte 73..81,
and `sol_balance` is stored at byte 81..89. The address of the official Solido
instance is listed [on the deployments page](../deployments).

Byte 0 of the Solido account data is a version byte. If we make changes to the
data layout of the Solido account, we will bump the value of this byte. You can
use this to block transactions after we update Solido, to prevent reading
garbage data.

At the moment we do not offer any libraries for extracting the on-chain data,
but we might support one if there is demand for it. Feel free to
[open an issue][new-issue] if you are interested.

[new-issue]: https://github.com/ChorusOne/solido/issues/new

## HTTP API

At the moment we do not expose a stable http API for requesting the current
exchange rate, but we might support one if there is demand for it. Feel free
to [open an issue][new-issue] if you are interested.

## Prometheus

The [maintenance daemon](../maintenance) exposes details about the Solido
instance at a Prometheus `/metrics` endpoint. These metrics include Solido’s
current exchange rate. You will need to run an instance of the maintenance
daemon yourself to access these metrics; the endpoint is not intended to be
exposed to the public internet.