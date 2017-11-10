require 'test_helper'

class StreamersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @streamer = streamers(:one)
  end

  test "should get index" do
    get streamers_url, as: :json
    assert_response :success
  end

  test "should create streamer" do
    assert_difference('Streamer.count') do
      post streamers_url, params: { streamer: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show streamer" do
    get streamer_url(@streamer), as: :json
    assert_response :success
  end

  test "should update streamer" do
    patch streamer_url(@streamer), params: { streamer: {  } }, as: :json
    assert_response 200
  end

  test "should destroy streamer" do
    assert_difference('Streamer.count', -1) do
      delete streamer_url(@streamer), as: :json
    end

    assert_response 204
  end
end
