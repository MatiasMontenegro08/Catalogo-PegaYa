import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import './skeleton.css';

/**
 * StickersSkeleton
 * - count: cantidad de cards skeleton a mostrar (por defecto 8)
 */
const StickerSkeleton = ({ count = 8 }) => {
    const items = Array.from({ length: count });
    return (
        <Grid container spacing={2} className="container-card-skeleton">
            {items.map((_, i) => (
                <Grid item xs={6} sm={4} md={3} key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: 220 }}>
                        <Skeleton variant="rectangular" height={140} animation="wave" />
                        <Skeleton variant="text" height={24} style={{ marginTop: 8 }} />
                        <Skeleton variant="text" width="60%" />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default StickerSkeleton;