# @nrwl/node:execute reproduction

## Reproduction steps

To test the reproduction, run `npm test` and wait for both server instances to print their ready-message (`Server listening on...`). If you try to access the servers, one of them should not respond because it has been killed.

## Expected behavior

I expect both node instances to start and not be killed until I terminate the process.

## Note

I created two (almost) identical servers to emphasise that it doesn't have to be the same application that gets executed for one to be killed.
