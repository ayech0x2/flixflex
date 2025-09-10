import { moderateScale } from "@/lib/normalize";
import { Box, SafeAreaView, Theme } from "@/lib/restyle";
import Header from "@/shared/components/Header";
import Skeleton from "@/shared/components/Skeleton";
import { useTheme } from "@shopify/restyle";

function HomeScreenSkeleton() {
  const { sizes } = useTheme<Theme>();

  return (
    <SafeAreaView>
      <Header />
      <Box gap="m">
        <Skeleton
          loading
          width={sizes.screenWidth}
          height={sizes.screenWidth / 1.77}
        />
        <Skeleton
          loading
          width={sizes.screenWidth / 2}
          height={moderateScale(30)}
        />
        <Box flexDirection="row" gap="m">
          <Skeleton
            loading
            width={moderateScale(120)}
            height={moderateScale(120 * 1.5)}
          />
          <Skeleton
            loading
            width={moderateScale(120)}
            height={moderateScale(120 * 1.5)}
          />
          <Skeleton
            loading
            width={moderateScale(120)}
            height={moderateScale(120 * 1.5)}
          />
        </Box>
        <Skeleton
          loading
          width={sizes.screenWidth / 2}
          height={moderateScale(30)}
        />
        <Box flexDirection="row" gap="m">
          <Skeleton
            loading
            width={moderateScale(120)}
            height={moderateScale(120 * 1.5)}
          />
          <Skeleton
            loading
            width={moderateScale(120)}
            height={moderateScale(120 * 1.5)}
          />
          <Skeleton
            loading
            width={moderateScale(120)}
            height={moderateScale(120 * 1.5)}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
}

export default HomeScreenSkeleton;
