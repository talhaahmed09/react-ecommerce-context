import { Button, Divider, InputNumber, Skeleton, Table } from "antd";
import React, { useState } from "react";
import { CaretRightFilled } from "@ant-design/icons";

const columns = [
  {
    title: "Brands",
    dataIndex: "name",
  },
];

const Sidebar = ({
  brands,
  isLoading,
  setBrandSort,
  brandSort,
  getFilteredBrands,
  onPriceFilter,
  values,
  setValues,
}) => {
  let brandName = [];
  const onSelectChange = (selectedRowKeys, selectedRows, info) => {
    if (selectedRows.length < brandName.length) {
      setBrandSort([]);
      brandName = [];
    }
    if (!selectedRowKeys.length) {
      setBrandSort([]);
      brandName = [];
      return getFilteredBrands(brandName);
    }
    selectedRows.forEach((element) => {
      setBrandSort([...brandSort, element.name]);
      brandName.push(element.name);
    });

    getFilteredBrands(brandName);
  };
  const rowSelection = {
    columnTitle: <></>,
    onChange: onSelectChange,
  };

  return (
    <div className="mt-4">
      <Skeleton loading={isLoading}>
        <Table
          columns={columns}
          dataSource={brands}
          pagination={{ position: ["none", "none"] }}
          rowSelection={{ ...rowSelection }}
        />
        <div className="mt-4">
          <h1 style={{ fontSize: "15px" }}>Price</h1>
          <div className="d-flex ">
            <InputNumber
              size="small"
              defaultValue={0}
              placeholder="min"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(value) => setValues({ ...values, min: value })}
            />
            <span style={{ color: "grey" }}>-</span>
            <InputNumber
              size="small"
              placeholder="max"
              defaultValue={0}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(value) => setValues({ ...values, max: value })}
            />
            <Button
              type="primary"
              icon={<CaretRightFilled />}
              style={{ margin: "0 5px" }}
              onClick={(e) => onPriceFilter(values)}
            ></Button>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export default Sidebar;
