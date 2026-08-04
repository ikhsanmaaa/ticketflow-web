export interface StatusConfig {
  css: string;
  nextStep: string;
  actionRequired: boolean;
  color: string;
}

export const STATUS_CONFIG: Record<string, StatusConfig> = {
  Open: {
    css: 'open',
    color: '#6B7280', // Gray 500
    nextStep:
      'Tiket Anda sudah tercatat dan menunggu ditangani oleh agen. Anda belum perlu melakukan tindakan.',
    actionRequired: false,
  },

  Pending: {
    css: 'pending',
    color: '#F59E0B', // Amber 500
    nextStep: 'Tiket sedang menunggu proses internal seperti persetujuan atau pengadaan.',
    actionRequired: false,
  },

  'Waiting for support': {
    css: 'support',
    color: '#1E3A8A', // Blue 800
    nextStep: 'Tiket sedang ditangani oleh tim IT Support.',
    actionRequired: false,
  },

  'Waiting for partner': {
    css: 'partner',
    color: '#6366F1', // Indigo 500
    nextStep: 'Tiket sedang menunggu proses dari partner/vendor.',
    actionRequired: false,
  },

  'In Progress': {
    css: 'progress',
    color: '#2563EB', // Blue 600
    nextStep: 'Tim IT sedang mengerjakan tiket Anda.',
    actionRequired: false,
  },

  'Waiting for customer': {
    css: 'customer',
    color: '#38BDF8', // Sky 400
    nextStep: 'Mohon balas email tiket untuk memberikan informasi tambahan.',
    actionRequired: true,
  },

  Resolved: {
    css: 'resolved',
    color: '#22C55E', // Green 500
    nextStep: 'Pekerjaan telah selesai. Jika masih mengalami masalah silakan balas email tiket.',
    actionRequired: false,
  },

  Reopened: {
    css: 'reopened',
    color: '#EF4444', // Red 500
    nextStep: 'Tiket dibuka kembali dan sedang ditinjau ulang.',
    actionRequired: false,
  },

  Closed: {
    css: 'closed',
    color: '#22C55E', // Green 500
    nextStep: 'Tiket telah ditutup.',
    actionRequired: false,
  },
};
