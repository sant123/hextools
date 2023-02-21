# hextools [![Deno](https://github.com/sant123/hextools/actions/workflows/deno.yml/badge.svg)](https://github.com/sant123/hextools/actions/workflows/deno.yml)

Convert from ArrayBuffer to hexadecimal and viceversa in Deno.

## Usage

```ts
// example.ts
import { bufferToHex, hexToBuffer } from "https://deno.land/x/hextools/mod.ts";

const hex = bufferToHex(
  new Uint8Array([
    72,
    101,
    108,
    108,
    111,
    32,
    119,
    111,
    114,
    108,
    100,
  ]),
); // 48656c6c6f20776f726c64

const buffer = hexToBuffer(hex);
console.log(new TextDecoder().decode(buffer)); // Hello world
```

## API

### bufferToHex(buffer: ArrayBuffer): string

Converts from an ArrayBuffer to a hexadecimal string.

### hexToBuffer(hex: string): ArrayBuffer

Converts from a hexadecimal string to ArrayBuffer.

## Exceptions

### hexToBuffer(hex: string): ArrayBuffer

Throws a `TypeError` if hex length is not even or it has unrecognized
characters.
