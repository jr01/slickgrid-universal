export class PaginationRenderer {
  renderPagination() {
    return $(this.getPaginationHtmlTemplate());
  }

  getPaginationHtmlTemplate() {
    return `<div id="pager" style="width:100%;">
    <div class="slick-pagination">
      <div class="slick-pagination-nav">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link icon-seek-first href="" aria-label="First" click.delegate="changeToFirstPage($event)">
              </button>
            </li>
            <li class="page-item disabled">
              <button class="page-link icon-seek-prev href="" aria-label="Previous" click.delegate="changeToPreviousPage($event)">
              </button>
            </li>
          </ul>
        </nav>

        <div class="slick-page-number">
          <span>Page</span>
          <input type="text" class="form-control" data-test="page-number-input" value="1" size="1" readonly.bind="totalItems === 0" change.delegate="changeToCurrentPage($event)">
          <span>of</span>
          <span data-test="page-count"> 199</span>
        </div>

        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link icon-seek-next href="" aria-label="Next" click.delegate="changeToNextPage($event)">
              </button>
            </li>
            <li class="page-item">
              <button class="page-link icon-seek-end href="" aria-label="Last" click.delegate="changeToLastPage($event)">
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <span class="slick-pagination-settings">
        <select id="items-per-page-label" value="5">
          <option model.bind="pageSize" value="5">
            5</option><option model.bind="pageSize" value="10">
            10</option><option model.bind="pageSize" value="15">
            15</option><option model.bind="pageSize" value="20">
            20</option><option model.bind="pageSize" value="25">
            25</option><option model.bind="pageSize" value="50">
            50</option><option model.bind="pageSize" value="75">
            75</option><option model.bind="pageSize" value="100">
            100</option><option model.bind="pageSize" value="100">
            100</option>
        </select>
        <span>items per page</span>,
        <span class="slick-pagination-count">
          <span>
            <span class="page-info-from-to">
              <span data-test="item-from">1</span>-<span data-test="item-to">5</span>
              of
            </span>
          </span>
          <span class="page-info-total-items">
            <span data-test="total-items">995</span> items
          </span>
        </span>
      </span>
    </div>
  </div>`;
  }
}