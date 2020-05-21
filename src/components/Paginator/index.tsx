import React from "react";

import { Container } from "./styles";

interface Props {
    itensPerPage: number;
    totalItens: number;
    paginate: any;
    currentPage: number;
}

const Paginator: React.FC<Props> = ({
    itensPerPage,
    totalItens,
    paginate,
    currentPage,
}) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <Container>
            {currentPage >= 3 && (
                <a
                    href="!#"
                    onClick={() => {
                        paginate(1);
                    }}
                >
                    1
                </a>
            )}
            {pageNumber.map(
                (number) =>
                    number <= 3 &&
                    currentPage < 3 && (
                        <a
                            href="!#"
                            key={number}
                            onClick={() => {
                                paginate(number);
                            }}
                        >
                            {number}
                        </a>
                    ),
            )}
            {pageNumber.map(
                (number) =>
                    currentPage >= 3 &&
                    number <= currentPage - 1 &&
                    number !== 1 &&
                    number >= currentPage - 2 &&
                    currentPage - 1 !== pageNumber.length && (
                        <a
                            href="!#"
                            key={number}
                            onClick={() => {
                                paginate(number);
                            }}
                        >
                            {number}
                        </a>
                    ),
            )}
            {currentPage >= 3 && <span>{currentPage}</span>}
            {pageNumber.map(
                (number) =>
                    currentPage >= 3 &&
                    number >= currentPage + 1 &&
                    number <= currentPage + 2 &&
                    currentPage + 1 !== pageNumber.length &&
                    number !== pageNumber.length && (
                        <a
                            href="!#"
                            key={number}
                            onClick={() => {
                                paginate(number);
                            }}
                        >
                            {number}
                        </a>
                    ),
            )}

            {pageNumber.length > 3 && currentPage !== pageNumber.length && (
                <a
                    href="!#"
                    onClick={() => {
                        paginate(pageNumber.length);
                    }}
                >
                    {pageNumber.length}
                </a>
            )}
        </Container>
    );
};

export default Paginator;
