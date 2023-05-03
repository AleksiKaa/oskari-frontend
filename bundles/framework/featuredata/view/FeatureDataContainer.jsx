import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Message } from 'oskari-ui';
import { getSorterFor, Table } from 'oskari-ui/components/Table';
import styled from 'styled-components';

const FEATUREDATA_DEFAULT_HIDDEN_FIELDS = ['__fid', '__centerX', '__centerY', 'geometry'];
const BUNDLE_ID = 'FeatureData';

const createFeaturedataGrid = (features, selectedFeatureIds) => {
    if (!features || !features.length) {
        return <Message bundleKey={BUNDLE_ID} messageKey={'layer.out-of-content-area'}/>;
    };
    const columnSettings = createColumnSettingsFromFeatures(features);
    const dataSource = createDatasourceFromFeatures(features);
    const featureTable = <Table
        columns={ columnSettings }
        size={ 'large '}
        dataSource={ dataSource }
        pagination={{ position: ['none', 'none'] }}
        rowSelection={{ selectedRowKeys: selectedFeatureIds }}
    />;

    return featureTable;
};

const createColumnSettingsFromFeatures = (features) => {
    return Object.keys(features[0].properties)
        .filter(key => !FEATUREDATA_DEFAULT_HIDDEN_FIELDS.includes(key))
        .map(key => {
            return {
                align: 'left',
                title: key,
                dataIndex: key,
                sorter: getSorterFor(key)
            };
        });
};

const createDatasourceFromFeatures = (features) => {
    return features.map(feature => {
        return {
            key: feature.id,
            ...feature.properties
        };
    });
};

const createLayerTabs = (layerId, layers, features, selectedFeatureIds) => {
    const tabs = layers?.map(layer => {
        return {
            key: layer.getId(),
            label: layer.getName(),
            children: layer.getId() === layerId
                ? createFeaturedataGrid(features, selectedFeatureIds)
                : null
        };
    }) || [];
    return tabs;
};

const ContainerDiv = styled('div')`
    padding: 1em;
    min-width: 35em; //prevents ant-tabs from entering flickering mode
    .ant-table-selection-col, .ant-table-selection-column {
        display: none;
    }
`;
export const FeatureDataContainer = ({ state, controller }) => {
    const { layers, activeLayerId, activeLayerFeatures, selectedFeatureIds } = state;
    const tabs = createLayerTabs(activeLayerId, layers, activeLayerFeatures, selectedFeatureIds);
    return (
        <ContainerDiv>
            <Tabs
                activeKey = { activeLayerId }
                items={ tabs }
                onChange={(key) => controller.setActiveTab(key)}/>
        </ContainerDiv>
    );
};

FeatureDataContainer.propTypes = {
    state: PropTypes.object,
    controller: PropTypes.object
};
