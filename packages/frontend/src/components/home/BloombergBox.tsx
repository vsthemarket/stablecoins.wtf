import Image from 'next/image'
import topbarArrowIcon from 'public/icons/bbg/bbg-icon-arrowupright.svg'
import topbarCrossIcon from 'public/icons/bbg/bbg-icon-cross.svg'
import topbarMenuIcon from 'public/icons/bbg/bbg-icon-menu.svg'
import topbarSquareIcon from 'public/icons/bbg/bbg-icon-square.svg'
import { FC, PropsWithChildren } from 'react'
import tw, { styled } from 'twin.macro'

const BloombergBoxWrapper = styled.div(() => [
  tw`flex-grow-0 relative border border-bbg-gray3 p-2 px-3 overflow-scroll`,
])

export const BloombergBoxHR = tw.hr`border-bbg-gray3 -mx-3 my-5`

export interface BloombergBoxProps {
  hideTopBar?: boolean
  title?: string
  isClosable?: boolean
  onClosed?: () => void
}
export const BloombergBox: FC<PropsWithChildren<BloombergBoxProps>> = ({
  children,
  hideTopBar,
  isClosable,
  onClosed,
  title,
  ...props
}) => {
  return (
    <>
      <BloombergBoxWrapper {...props}>
        <div tw="flex flex-col flex-grow">
          {/* Top Bar */}
          {!hideTopBar && (
            <div tw="sticky -top-2 z-50 bg-black bg-opacity-50 backdrop-blur flex justify-between text-bbg-gray2 text-sm p-2 px-3 -mt-2 -mx-3">
              <h3>{title}</h3>
              <div tw="flex-shrink-0 flex items-center select-none space-x-4">
                {isClosable ? (
                  <button
                    tw="flex items-center space-x-2 self-center text-white bg-white bg-opacity-0 px-1 -mr-1 hover:bg-opacity-10"
                    onClick={() => onClosed?.()}
                  >
                    <Image src={topbarCrossIcon} width={10} height={10} alt="Close Button Icon" />
                    <span>Hide</span>
                  </button>
                ) : (
                  <>
                    <div tw="flex items-center space-x-2">
                      <Image
                        src={topbarMenuIcon}
                        width={10}
                        height={10}
                        alt="Decorative Options Icon"
                      />
                      <span>Options</span>
                    </div>
                    <div>
                      <Image
                        src={topbarArrowIcon}
                        width={10}
                        height={10}
                        alt="Decorative Arrow Icon"
                      />
                    </div>
                    <div>
                      <Image
                        src={topbarSquareIcon}
                        width={10}
                        height={10}
                        alt="Decorative Square Icon"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Content */}
          {children}
        </div>
      </BloombergBoxWrapper>
    </>
  )
}