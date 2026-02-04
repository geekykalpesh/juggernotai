"use client";

import React, { useMemo } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    Background,
    Controls,
    ConnectionLineType,
    MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const commonStyle: React.CSSProperties = {
    background: '#12151B',
    color: '#E6EAF0',
    border: '1px solid #1F2430',
    borderRadius: '12px',
    fontSize: '12px',
    width: 150,
    textAlign: 'center',
};

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Founder-Led / Sales-Led' },
        position: { x: 250, y: 0 },
        style: { ...commonStyle, fontWeight: 'bold', width: 180 },
    },
    {
        id: '2',
        data: { label: 'High-ACV Offer' },
        position: { x: 100, y: 100 },
        style: commonStyle,
    },
    {
        id: '3',
        data: { label: '10-200 Employees' },
        position: { x: 400, y: 100 },
        style: commonStyle,
    },
    {
        id: '4',
        data: { label: 'Marketing Infrastructure' },
        position: { x: 250, y: 200 },
        style: {
            ...commonStyle,
            background: '#FFFFFF',
            color: '#0B0D10',
            border: '1px solid #FFFFFF',
            fontWeight: 'bold',
            width: 180,
        },
    },
    {
        id: '5',
        type: 'output',
        data: { label: 'Compounding Growth' },
        position: { x: 250, y: 300 },
        style: {
            ...commonStyle,
            fontWeight: 'bold',
            width: 180,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
        },
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#9AA4B2' } },
    { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#9AA4B2' } },
    { id: 'e2-4', source: '2', target: '4', style: { stroke: '#9AA4B2' } },
    { id: 'e3-4', source: '3', target: '4', style: { stroke: '#9AA4B2' } },
    {
        id: 'e4-5',
        source: '4',
        target: '5',
        animated: true,
        style: { stroke: '#FFFFFF', strokeWidth: 2 },
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#FFFFFF',
        },
    },
];

export function GTMFlow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100%', height: '400px' }} className="mt-12 rounded-lg border border-brand-border/30 overflow-hidden bg-brand-bg/50 backdrop-blur-sm">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                connectionLineType={ConnectionLineType.SmoothStep}
                fitView
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnScroll={false}
                panOnDrag={false}
                style={{ background: 'transparent' }}
            >
                <Background color="#1F2430" gap={20} />
            </ReactFlow>
        </div>
    );
}
