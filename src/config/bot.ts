import { env } from './env';

export const botInfo = {
  name: env.botName,
  version: env.botVersion,
  owner: {
    name: env.ownerName,
    number: env.ownerNumber,
    contact: env.ownerContact
  }
};
