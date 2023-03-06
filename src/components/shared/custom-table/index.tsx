import DataGrid, {
  Column,
  Editing,
  FormItem,
  Lookup,
  // Selection,
} from "devextreme-react/data-grid";

import "devextreme-react/text-area";
import "devextreme-react/file-uploader";

// import Button from "devextreme-react/button";

import FileUploader from "devextreme-react/file-uploader";
import React from "react";

const backendURL = "https://via.placeholder.com/150x150";
let fileUploaderRef = React.createRef<any>();
let imgRef = React.createRef<any>();

function editCellRender(cellInfo: any) {
  return (
    <>
      <img
        ref={imgRef}
        className="uploadedImage"
        src={backendURL}
        alt="employee pic"
      />
      <FileUploader
        ref={fileUploaderRef}
        multiple={false}
        accept="image/*"
        uploadMode="instantly"
        uploadUrl={backendURL + "FileUpload/post"}
        // onValueChanged={onValueChanged}
        // onUploaded={(e) => onUploaded(e, cellInfo)}
        // onUploadError={onUploadError}
      />
      {/* <Button
        className={"retryButton"}
        text="Retry"
        // visible={retryButtonVisible}
        // onClick={onClick}
      /> */}
    </>
  );
}

const cellRender = (data: any) => {
  return <img src={backendURL} alt="menu" />;
};

export const CustomTable = () => {
  const employees = [
    {
      id: 1,
      name: "Basso",
      published: new Date(),
      category: "Soup",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis veniam voluptas sit, dignissimos id consequuntur provident hic sunt amet, porro laboriosam atque molestiae tempore necessitatibus nam omnis animi nemo.`,
      picture: "https://via.placeholder.com/150x150",
    },
    {
      id: 2,
      name: "Randang",
      category: "Dinner",
      published: new Date(),
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis eos, maxime repellendus unde odit, cumque debitis eum id illum placeat esse facilis illo quae consectetur tenetur libero explicabo ea!`,
      picture: "https://via.placeholder.com/150x150",
    },
  ];

  const notesEditorOptions = { height: 100 };

  const states = [
    { id: 1, category: "Soup" },
    { id: 2, category: "Dinner" },
  ];

  return (
    <DataGrid
      dataSource={employees}
      showBorders={true}
      hoverStateEnabled={true}
      keyExpr="id"
    >
      {/* <Selection mode="single" /> */}

      <Editing
        {...{
          allowUpdating: true,
          allowAdding: true,
          allowDeleting: true,
          mode: "form",
          useIcons: true,
        }}
      />

      <Column dataField="category" caption="Kind" width={70}>
        <Lookup
          dataSource={states}
          valueExpr="category"
          displayExpr="category"
        />
      </Column>
      <Column dataField="name" />
      <Column dataField="published" dataType={"date"} allowEditing={false} />
      <Column dataField="description" visible={false}>
        <FormItem editorType="dxTextArea" editorOptions={notesEditorOptions} />
      </Column>
      <Column
        dataField="picture"
        width={70}
        allowSorting={false}
        cellRender={cellRender}
        editCellRender={editCellRender}
        visible={false}
      />
    </DataGrid>
  );
};
