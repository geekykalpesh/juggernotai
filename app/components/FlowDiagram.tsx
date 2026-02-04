"use client";

import React, { useMemo } from 'react';
import { cn } from "@/lib/utils";
import { 
  ReactFlow, 
  Background, 
  Handle, 
  Position, 
  Edge, 
  Node as FlowNode,
  BaseEdge,
  getBezierPath,
  EdgeProps
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { 
  Network, Webhook, Activity, BarChart3, Zap, 
  Target, Cpu, GitMerge, Share2, Layers, MessageSquare, ArrowRight 
} from "lucide-react";

// --- CUSTOM NODE ---
const CustomNode = ({ data }: { data: any }) => {
  const Icon = data.icon;
  return (
    <div className={cn(
      "px-3 py-2 md:px-4 md:py-3 rounded-lg bg-[#0F0F0F] border border-white/10 shadow-2xl relative group hover:border-white/30 transition-all flex items-center gap-2 md:gap-4",
      "min-w-[140px] md:min-w-[180px]"
    )}>
      {!data.hideTarget && <Handle type="target" position={Position.Left} className="!bg-white/20 !border-none !w-1.5 !h-1.5 !-left-1" />}
      
      <div className={`p-1.5 md:p-2 rounded-xl bg-white/5 ${data.color} shrink-0`}>
        <Icon size={16} className="md:w-[18px] md:h-[18px]" />
      </div>
      
      <div className="flex flex-col min-w-0">
        <span className="text-white text-[10px] md:text-xs font-medium truncate">{data.label}</span>
        {data.sublabel && <span className="text-[7px] md:text-[8px] text-white/30 font-mono italic uppercase tracking-widest truncate">{data.sublabel}</span>}
      </div>

      {!data.hideSource && <Handle type="source" position={Position.Right} className="!bg-white/20 !border-none !w-1.5 !h-1.5 !-right-1" />}
      
      {/* Decorative Glow */}
      <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm`} />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// --- CUSTOM EDGE ---
function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge 
      path={edgePath} 
      markerEnd={markerEnd} 
      style={{ 
        ...style, 
        stroke: 'rgba(255,255,255,0.1)', 
        strokeWidth: 2 
      }} 
    />
  );
}

const edgeTypes = {
  custom: CustomEdge,
};

// --- FLOW DEFINITIONS ---

const GET_NODES_FOR_TYPE = (type: string, color: string): FlowNode[] => {
  switch (type) {
    case 'foundation':
      return [
        { id: '1', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Inputs Collected', icon: Webhook, color, sublabel: 'DATA_INGEST', hideTarget: true } },
        { id: '2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Define & Map', icon: Target, color, sublabel: 'STRAT_LAYER' } },
        { id: '3', type: 'custom', position: { x: 400, y: 50 }, data: { label: 'Connect Systems', icon: Network, color, sublabel: 'INTEGRATION', hideSource: true } },
        { id: '4', type: 'custom', position: { x: 400, y: 150 }, data: { label: 'Create Hubs', icon: Layers, color, sublabel: 'SYNC_CENTER', hideSource: true } },
      ];
    case 'launch':
      return [
        { id: '1', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Campaign Start', icon: Zap, color, sublabel: 'SYS_BOOT', hideTarget: true } },
        { id: '2', type: 'custom', position: { x: 200, y: 0 }, data: { label: 'ContentIQ', icon: Share2, color, sublabel: 'DIST_CH' } },
        { id: '3', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'ABM Ads', icon: ArrowRight, color, sublabel: 'PAID_SYS' } },
        { id: '4', type: 'custom', position: { x: 200, y: 200 }, data: { label: 'Outbound', icon: MessageSquare, color, sublabel: 'DIRECT_CH' } },
        { id: '5', type: 'custom', position: { x: 400, y: 100 }, data: { label: 'Market Insights', icon: Activity, color, sublabel: 'ANALYTIC', hideSource: true } },
      ];
    case 'amplify':
      return [
        { id: '1', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Engagement', icon: Activity, color, sublabel: 'SIG_IN', hideTarget: true } },
        { id: '2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Signal Enrich', icon: Cpu, color, sublabel: 'AI_PROC' } },
        { id: '3', type: 'custom', position: { x: 400, y: 50 }, data: { label: 'Warm Triggers', icon: Zap, color, sublabel: 'EXEC_LAYER', hideSource: true } },
        { id: '4', type: 'custom', position: { x: 400, y: 150 }, data: { label: 'Pipeline Sync', icon: BarChart3, color, sublabel: 'CRM_WRT', hideSource: true } },
      ];
    case 'mastery':
      return [
        { id: '1', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'CRM Enrichment', icon: GitMerge, color, sublabel: 'DATA_CLN', hideTarget: true } },
        { id: '2', type: 'custom', position: { x: 200, y: 100 }, data: { label: 'Lead Priority', icon: ArrowRight, color, sublabel: 'ROUTE_SYS' } },
        { id: '3', type: 'custom', position: { x: 400, y: 100 }, data: { label: 'Sales Ready', icon: Target, color, sublabel: 'SALES_RDY', hideSource: true } },
      ];
    default:
      return [];
  }
};

const GET_EDGES_FOR_TYPE = (type: string): Edge[] => {
  switch (type) {
    case 'foundation':
      return [
        { id: 'e1-2', source: '1', target: '2', type: 'custom', animated: true },
        { id: 'e2-3', source: '2', target: '3', type: 'custom' },
        { id: 'e2-4', source: '2', target: '4', type: 'custom' },
      ];
    case 'launch':
      return [
        { id: 'e1-2', source: '1', target: '2', type: 'custom', animated: true },
        { id: 'e1-3', source: '1', target: '3', type: 'custom', animated: true },
        { id: 'e1-4', source: '1', target: '4', type: 'custom', animated: true },
        { id: 'e2-5', source: '2', target: '5', type: 'custom' },
        { id: 'e3-5', source: '3', target: '5', type: 'custom' },
        { id: 'e4-5', source: '4', target: '5', type: 'custom' },
      ];
    case 'amplify':
      return [
        { id: 'e1-2', source: '1', target: '2', type: 'custom', animated: true },
        { id: 'e2-3', source: '2', target: '3', type: 'custom', animated: true },
        { id: 'e2-4', source: '2', target: '4', type: 'custom' },
      ];
    case 'mastery':
      return [
        { id: 'e1-2', source: '1', target: '2', type: 'custom', animated: true },
        { id: 'e2-3', source: '2', target: '3', type: 'custom', animated: true },
      ];
    default:
      return [];
  }
};

export default function FlowDiagram({ type, color }: { type: string, color: string }) {
  const nodes = useMemo(() => GET_NODES_FOR_TYPE(type, color), [type, color]);
  const edges = useMemo(() => GET_EDGES_FOR_TYPE(type), [type]);

  return (
    <div className="w-full h-full relative group">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        onInit={(instance) => {
          setTimeout(() => instance.fitView(), 100);
        }}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        preventScrolling={false}
        draggable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Base Dotted Layer */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "opacity-[0.4]",
                    "[background-image:radial-gradient(rgba(255,255,255,0.3)_1.5px,transparent_1.5px)]",
                )}
            />
            {/* Glow / Masking layer to give it depth and faded edges */}
            <div 
                className="absolute inset-0" 
                style={{
                    background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,1) 95%)`
                }}
            />
        </div>
      </ReactFlow>
      
      {/* Dynamic Colored Glow based on phase color */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] blur-[120px] rounded-full pointer-events-none bg-current ${color}`} />
    </div>
  );
}
