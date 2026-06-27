import { requireRole } from '@/lib/core/session';
import React from 'react';

const layerLayout = async ({ children }) => {
    await requireRole('layer')
    return children;
};

export default layerLayout;