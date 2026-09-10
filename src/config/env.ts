import 'dotenv/config';

export const env = {
  botName: process.env.BOT_NAME || 'Mi Bot WhatsApp',
  botVersion: process.env.BOT_VERSION || '2.0.0',
  ownerName: process.env.OWNER_NAME || 'Administrador',
  ownerNumber: process.env.OWNER_NUMBER || '',
  ownerContact: process.env.OWNER_CONTACT || '',
  prefix: process.env.BOT_PREFIX || '!'
};
