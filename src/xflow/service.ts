/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import { DND_RENDER_ID, NODE_WIDTH, NODE_HEIGHT } from './constant';
import { uuidv4, NsGraph, NsGraphStatusCommand } from '@antv/xflow';
import type { NsRenameNodeCmd } from './cmd-extensions/cmd-rename-node-modal';
import type { NsNodeCmd, NsEdgeCmd, NsGraphCmd } from '@antv/xflow';
import type { NsDeployDagCmd } from './cmd-extensions/cmd-deploy';
/** mock 后端接口调用 */
export namespace MockApi {
  export const NODE_COMMON_PROPS = {
    renderKey: DND_RENDER_ID,
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  } as const;

  /** 查图的meta元信息 */
  export const queryGraphMeta: NsGraphCmd.GraphMeta.IArgs['graphMetaService'] = async (args) => {
    console.log('queryMeta', args);
    return { ...args, flowId: args.meta.flowId };
  };
  /** 加载图数据的api */
  export const loadGraphData = async (meta: NsGraph.IGraphMeta) => {
    const nodes: NsGraph.INodeConfig[] = [
      {
        ...NODE_COMMON_PROPS,
        id: 'node1',
        label: '算法节点-1',
        ports: [
          {
            id: 'node1-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
          },
          {
            id: 'node1-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node2',
        label: '算法节点-2',
        ports: [
          {
            id: 'node2-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
            connected: true,
          },
          {
            id: 'node2-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node3',
        label: '算法节点-3',
        ports: [
          {
            id: 'node3-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
            connected: true,
          },
          {
            id: 'node3-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node4',
        label: '算法节点-4',
        ports: [
          {
            id: 'node4-input-1',
            type: NsGraph.AnchorType.INPUT,
            group: NsGraph.AnchorGroup.TOP,
            tooltip: '输入桩',
            connected: true,
          },
          {
            id: 'node4-output-1',
            type: NsGraph.AnchorType.OUTPUT,
            group: NsGraph.AnchorGroup.BOTTOM,
            tooltip: '输出桩',
          },
        ] as NsGraph.INodeAnchor[],
      },
    ];
    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node2',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node2-input-1',
      },
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node3',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node3-input-1',
      },
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node4',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node4-input-1',
      },
    ];
    return { nodes, edges };

    //   return {
    //     "nodes": [
    //         {
    //             "id": "node1",
    //             "renderKey": "DND_NDOE",
    //             "width": 180,
    //             "height": 36,
    //             "label": "算法节点-1",
    //             "ports": [
    //                 {
    //                     "id": "node1-input-1",
    //                     "type": "input",
    //                     "group": "top",
    //                     "tooltip": "输入桩"
    //                 },
    //                 {
    //                     "id": "node1-output-1",
    //                     "type": "output",
    //                     "group": "bottom",
    //                     "tooltip": "输出桩"
    //                 }
    //             ],
    //             "x": 300,
    //             "y": 50,
    //             "_order": 0,
    //             "group": "2fd8bb17-b3b9-4753-870b-0764892cc027",
    //             "isCollapsed": false
    //         },
    //         {
    //           "id": "2fd8bb17-b3b9-4753-870b-0764892cc027",
    //           "renderKey": "GROUP_NODE_RENDER_ID",
    //           "width": 204,
    //           "height": 100,
    //           "groupChildren": [
    //               "node1"
    //           ],
    //           "groupCollapsedSize": {
    //               "width": 200,
    //               "height": 40
    //           },
    //           "label": "新建群组",
    //           "ports": [],
    //           "groupChildrenSize": {
    //               "width": 204,
    //               "height": 100
    //           },
    //           "x": 288,
    //           "y": -2,
    //           "isGroup": true
    //       },
    //         {
    //             "id": "node2",
    //             "renderKey": "DND_NDOE",
    //             "width": 180,
    //             "height": 36,
    //             "label": "算法节点-2",
    //             "ports": [
    //                 {
    //                     "id": "node2-input-1",
    //                     "type": "input",
    //                     "group": "top",
    //                     "tooltip": "输入桩",
    //                     "connected": true
    //                 },
    //                 {
    //                     "id": "node2-output-1",
    //                     "type": "output",
    //                     "group": "bottom",
    //                     "tooltip": "输出桩"
    //                 }
    //             ],
    //             "x": 80,
    //             "y": 180,
    //             "_order": 0
    //         },
    //         {
    //             "id": "node3",
    //             "renderKey": "DND_NDOE",
    //             "width": 180,
    //             "height": 36,
    //             "label": "算法节点-3",
    //             "ports": [
    //                 {
    //                     "id": "node3-input-1",
    //                     "type": "input",
    //                     "group": "top",
    //                     "tooltip": "输入桩",
    //                     "connected": true
    //                 },
    //                 {
    //                     "id": "node3-output-1",
    //                     "type": "output",
    //                     "group": "bottom",
    //                     "tooltip": "输出桩"
    //                 }
    //             ],
    //             "x": 300,
    //             "y": 180,
    //             "_order": 1
    //         },
    //         {
    //             "id": "node4",
    //             "renderKey": "DND_NDOE",
    //             "width": 180,
    //             "height": 36,
    //             "label": "算法节点-4",
    //             "ports": [
    //                 {
    //                     "id": "node4-input-1",
    //                     "type": "input",
    //                     "group": "top",
    //                     "tooltip": "输入桩",
    //                     "connected": true
    //                 },
    //                 {
    //                     "id": "node4-output-1",
    //                     "type": "output",
    //                     "group": "bottom",
    //                     "tooltip": "输出桩"
    //                 }
    //             ],
    //             "x": 520,
    //             "y": 180,
    //             "_order": 2
    //         },
    //     ],
    //     "edges": [
    //         {
    //             "id": "4520d302-5b36-4f55-abdd-390947def70f",
    //             "source": "node1",
    //             "target": "node2",
    //             "sourcePortId": "node1-output-1",
    //             "targetPortId": "node2-input-1",
    //             "connector": {
    //                 "name": "rounded"
    //             },
    //             "router": {
    //                 "name": "manhattan"
    //             },
    //             "sourcePort": "node1-output-1",
    //             "targetPort": "node2-input-1"
    //         },
    //         {
    //             "id": "f44dc92b-0e32-4a20-8b89-bec49836bcfa",
    //             "source": "node1",
    //             "target": "node3",
    //             "sourcePortId": "node1-output-1",
    //             "targetPortId": "node3-input-1",
    //             "connector": {
    //                 "name": "rounded"
    //             },
    //             "router": {
    //                 "name": "manhattan"
    //             },
    //             "sourcePort": "node1-output-1",
    //             "targetPort": "node3-input-1"
    //         },
    //         {
    //             "id": "de1caa6c-b739-4392-bf77-806515a5a49f",
    //             "source": "node1",
    //             "target": "node4",
    //             "sourcePortId": "node1-output-1",
    //             "targetPortId": "node4-input-1",
    //             "connector": {
    //                 "name": "rounded"
    //             },
    //             "router": {
    //                 "name": "manhattan"
    //             },
    //             "sourcePort": "node1-output-1",
    //             "targetPort": "node4-input-1"
    //         }
    //     ]
    // }
  };
  /** 保存图数据的api */
  export const saveGraphData: NsGraphCmd.SaveGraphData.IArgs['saveGraphDataService'] = async (
    meta: NsGraph.IGraphMeta,
    graphData: NsGraph.IGraphData
  ) => {
    console.log('saveGraphData api', meta, graphData);
    return {
      success: true,
      data: graphData,
    };
  };
  /** 部署图数据的api */
  export const deployDagService: NsDeployDagCmd.IDeployDagService = async (
    meta: NsGraph.IGraphMeta,
    graphData: NsGraph.IGraphData
  ) => {
    console.log('deployService api', meta, graphData);
    return {
      success: true,
      data: graphData,
    };
  };

  /** 添加节点api */
  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async (args: NsNodeCmd.AddNode.IArgs) => {
    console.info('addNode service running, add node:', args);
    const portItems = [
      {
        type: NsGraph.AnchorType.INPUT,
        group: NsGraph.AnchorGroup.TOP,
        tooltip: '输入桩1',
      },
      {
        type: NsGraph.AnchorType.INPUT,
        group: NsGraph.AnchorGroup.TOP,
        tooltip: '输入桩2',
      },
      {
        type: NsGraph.AnchorType.INPUT,
        group: NsGraph.AnchorGroup.TOP,
        tooltip: '输入桩3',
      },
      {
        type: NsGraph.AnchorType.OUTPUT,
        group: NsGraph.AnchorGroup.BOTTOM,
        tooltip: '输出桩',
      },
    ] as NsGraph.INodeAnchor[];

    const { id, ports = portItems, groupChildren } = args.nodeConfig;
    const nodeId = id || uuidv4();
    /** 这里添加连线桩 */
    const node: NsNodeCmd.AddNode.IArgs['nodeConfig'] = {
      ...NODE_COMMON_PROPS,
      ...args.nodeConfig,
      id: nodeId,
      ports: (ports as NsGraph.INodeAnchor[]).map((port) => {
        return { ...port, id: uuidv4() };
      }),
    };
    /** group没有链接桩 */
    if (groupChildren && groupChildren.length) {
      node.ports = [];
    }
    return node;
  };

  /** 更新节点 name，可能依赖接口判断是否重名，返回空字符串时，不更新 */
  export const renameNode: NsRenameNodeCmd.IUpdateNodeNameService = async (name, node, graphMeta) => {
    console.log('rename node', node, name, graphMeta);
    return { err: null, nodeName: name };
  };

  /** 删除节点的api */
  export const delNode: NsNodeCmd.DelNode.IArgs['deleteNodeService'] = async (args) => {
    console.info('delNode service running, del node:', args.nodeConfig.id);
    return true;
  };

  /** 添加边的api */
  export const addEdge: NsEdgeCmd.AddEdge.IArgs['createEdgeService'] = async (args) => {
    console.info('addEdge service running, add edge:', args);
    const { edgeConfig } = args;
    return {
      ...edgeConfig,
      id: uuidv4(),
    };
  };

  /** 删除边的api */
  export const delEdge: NsEdgeCmd.DelEdge.IArgs['deleteEdgeService'] = async (args) => {
    console.info('delEdge service running, del edge:', args);
    return true;
  };

  let runningNodeId = 0;
  const statusMap = {} as NsGraphStatusCommand.IStatusInfo['statusMap'];
  let graphStatus: NsGraphStatusCommand.StatusEnum = NsGraphStatusCommand.StatusEnum.DEFAULT;
  export const graphStatusService: NsGraphStatusCommand.IArgs['graphStatusService'] = async () => {
    if (runningNodeId < 4) {
      statusMap[`node${runningNodeId}`] = { status: NsGraphStatusCommand.StatusEnum.SUCCESS };
      statusMap[`node${runningNodeId + 1}`] = { status: NsGraphStatusCommand.StatusEnum.PROCESSING };
      runningNodeId += 1;
      graphStatus = NsGraphStatusCommand.StatusEnum.PROCESSING;
    } else {
      runningNodeId = 0;
      statusMap.node4 = { status: NsGraphStatusCommand.StatusEnum.SUCCESS };
      graphStatus = NsGraphStatusCommand.StatusEnum.SUCCESS;
    }
    return {
      graphStatus: graphStatus,
      statusMap: statusMap,
    };
  };
  export const stopGraphStatusService: NsGraphStatusCommand.IArgs['graphStatusService'] = async () => {
    Object.entries(statusMap).forEach(([, val]) => {
      const { status } = val as { status: NsGraphStatusCommand.StatusEnum };
      if (status === NsGraphStatusCommand.StatusEnum.PROCESSING) {
        val.status = NsGraphStatusCommand.StatusEnum.ERROR;
      }
    });
    return {
      graphStatus: NsGraphStatusCommand.StatusEnum.ERROR,
      statusMap: statusMap,
    };
  };
}
