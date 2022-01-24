import {Entity} from "../domain/entity";
import {Component, OnInit, ViewChild} from "@angular/core";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {EntityService} from "./entity-service";

@Component({template: ''})
export abstract class AbstractEntityTableComponent<T extends Entity> implements OnInit {


  displayedColumns: string[] = ['actions'];
  dataSource!: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  protected constructor(private entityService: EntityService<T>) {

  }

  setDisplayedColumns(displayedEntityColumns: string[]) {
    this.displayedColumns = [];
    displayedEntityColumns.forEach(it => {
      this.displayedColumns.push(it)
    });
    this.displayedColumns.push('actions')
  }

  ngOnInit() {
    this.entityService.getAll().subscribe(all => {
      this.setTableData(all);
      console.log(JSON.stringify(all))
    });
  }


  setTableData(all: T[]) {
    this.dataSource = new MatTableDataSource<T>(all);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getItemById(id: number) {
    return this.dataSource.data.find(item => item.id == id);
  }

  delete(item: T) {
    this.entityService.delete(item).subscribe(response => {
      this.entityService.getAll().subscribe(all => {
        this.setTableData(all);
      });
    });
  }
}
