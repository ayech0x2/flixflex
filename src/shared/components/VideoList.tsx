import { Box, Text, Theme, TouchableOpacity } from "@/lib/restyle";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Modal, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";
import PlayIcon from "../svg/PlayIcon";
import { TmdbVideo } from "../types";

function VideoList({ videos }: { videos: TmdbVideo[] }) {
  const { sizes, colors } = useTheme<Theme>();

  const { bottom, top } = useSafeAreaInsets();

  const [showModal, setShowModal] = React.useState(false);

  const [videoId, setVideoId] = React.useState("");

  return (
    <React.Fragment>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box gap="s" flexDirection="row">
          {videos?.map((video, k) => (
            <TouchableOpacity
              backgroundColor="success"
              padding="s"
              key={k}
              flexDirection="row"
              alignItems="center"
              gap="xs"
              borderRadius="button"
              onPress={() => {
                setShowModal(true);
                setVideoId(video.key);
              }}
            >
              <PlayIcon />
              <Text>{video.name}</Text>
            </TouchableOpacity>
          ))}
        </Box>
      </ScrollView>
      <Modal
        backdropColor={colors.appBg}
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <Box flex={1} style={{ paddingTop: top }}>
          <YoutubePlayer
            play={true}
            height={sizes.screenWidth / 1.77}
            width={sizes.screenWidth}
            videoId={videoId}
          />
          <Box marginTop="auto" />
          <TouchableOpacity
            position="absolute"
            top={0}
            right={0}
            padding="xs"
            borderRadius="button"
            backgroundColor="danger"
            onPress={() => setShowModal(false)}
            style={{
              paddingVertical: bottom,
            }}
          >
            <Text variant="button" textAlign="center">
              End wathcing
            </Text>
          </TouchableOpacity>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default VideoList;
