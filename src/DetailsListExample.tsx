import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import items from './MOCK_DATA.json';

export interface IDetailsListBasicExampleItem {
  id: number;
  statementName: string;
  statementDate: string;
  clientNumber: number;
  institution: string;
  processDate: string;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}

export class DetailsListExample extends React.Component<{}, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    this._allItems = items

    this._columns = [
      { key: 'column1', name: 'Id', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: false },
      { key: 'column2', name: 'Statement Name', fieldName: 'statementName', minWidth: 100, maxWidth: 200, isResizable: false },
      { key: 'column3', name: 'Statement Date', fieldName: 'statementDate', minWidth: 100, maxWidth: 200, isResizable: false },
      { key: 'column4', name: 'Client Number', fieldName: 'clientNumber', minWidth: 100, maxWidth: 200, isResizable: false },
      { key: 'column5', name: 'Bank Name', fieldName: 'institution', minWidth: 100, maxWidth: 200, isResizable: false },
      { key: 'column6', name: 'Date Processed', fieldName: 'processDate', minWidth: 100, maxWidth: 200, isResizable: false },
    ];

    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
            onItemInvoked={this._onItemInvoked}
          />
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).statementName;
      default:
        return `${selectionCount} items selected`;
    }
  }


  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.statementName}`);
  };
}
